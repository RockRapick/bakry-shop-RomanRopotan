import {useAppSelector} from "../../redux/hooks.ts";
import BreadProductAdmin from "./BreadProductAdmin.tsx";
import BreadProductsUser from "./BreadProductsUser.tsx";


const Bread = () => {
    const authUser = useAppSelector(state => state.auth.authUser);
    if (authUser && authUser.includes("admin")) {
        return <BreadProductAdmin/>
    }
    return <BreadProductsUser/>
};

export default Bread;