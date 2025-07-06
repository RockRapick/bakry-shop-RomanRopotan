import type {LoginData} from "../../utils/shop-types.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import SignInForm from "../templates/SignIn/SignIn.tsx";
import {login} from "../../firebase/firebaseAuthSevice.ts";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const submitFn = (loginData: LoginData) => {
    //     // console.log(JSON.stringify(loginData))
    //     dispatch(loginAction(loginData.email))
    // }


    const loginWithFirebase = async (loginData: LoginData) => {
        try {
            const email = await login(loginData);
            dispatch(loginAction(email));
            navigate("/");
        } catch (e) {
            console.log(e);//Todo
        }
    }


    return (
        <div>
            <SignInForm submitFn={loginWithFirebase}/>

        </div>
    );
};

export default SignIn;