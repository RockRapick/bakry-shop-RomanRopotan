import './App.css'
//import Layout from "./components/navigation/Layout.tsx";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths} from "./utils/paths.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
//import ProductLayout from "./components/navigation/ProductLayout.tsx";
import Dairy from "./components/Dairy.tsx";
import Bread from "./components/Bread/Bread.tsx";
//import Navigator from "./components/navigation/Navigator.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/servicePages/ErrorPage.tsx";
import {useEffect} from "react";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import SignIn from "./components/servicePages/SignIn.tsx";
import {type ProductType, Roles, type RouteType, ShopCartProdType} from "./utils/shop-types.ts";
import {useAppDispatch, useAppSelector} from "./redux/hooks.ts";
import Logout from './components/servicePages/LogOut.tsx';
import SignUp from "./components/servicePages/SignUp.tsx";
import {getProducts} from "./firebase/firebaseDBService.ts";
import {prodsUpd} from "./redux/slices/productSlice.ts";
import {resetCart, setCart} from "./redux/slices/cartSlice.ts";
import {getCartProducts} from "./firebase/firebaseCartService.ts";

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authUser = useAppSelector(state => state.auth.authUser)
    useEffect(() => {
        if (location.pathname === `/${Paths.ERROR}`)
            navigate('/')
    }, []);

    useEffect(() => {
        const subscription = getProducts().subscribe({
            next: (prods: ProductType[]) => {
                dispatch(prodsUpd(prods));
            }
        });
        return () => {
            subscription.unsubscribe()
        };
    }, []);
    useEffect(() => {
        if(!authUser || authUser.includes('admin'))
            dispatch(resetCart());
        else{
            const subscribtion = getCartProducts(`${authUser}_collection`);
            subscribtion.subscribe({
                next: (cartProducts: ShopCartProdType[])=> dispatch(setCart(cartProducts))
            })
        }

    }, []);

    const predicate = (item: RouteType) => {
        const isAdmin = authUser && authUser.includes('admin');

        return (
            item.path !== Paths.CART || !isAdmin
        ) && (
            item.role === Roles.ALL ||
            item.role === Roles.USER && authUser ||
            item.role === Roles.ADMIN && isAdmin ||
            item.role === Roles.NO_AUTH && !authUser
        );

    }

    const getRoutes = () => {
        return navItems.filter(item => predicate(item))
    }
    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
            {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
            {/*<Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>*/}
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
                <Route path={Paths.SIGNIN} element={<SignIn/>}/>
                <Route path={Paths.SIGNUP} element={<SignUp/>}/>
                <Route path={Paths.LOGOUT} element={<Logout/>}/>
            </Route>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default App