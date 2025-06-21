
import type {LoginData} from "../../utils/shop-types.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import SignInForm from "../templates/SignIn/SignIn.tsx";

const SignIn = () => {
    const dispatch = useAppDispatch();
    const submitFn = (loginData: LoginData)=> {
        // console.log(JSON.stringify(loginData))
        dispatch(loginAction(loginData.email))
    }


    return (
        <div>
            <SignInForm submitFn={submitFn}/>

        </div>
    );
};

export default SignIn;