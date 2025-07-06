import SignUpForm from "../templates/SignUp/SignUp.tsx";
import type {LoginData, SignupData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthSevice.ts";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass: LoginData = {
            email: data.email,
            password: data.password,
        }
        try {
            await registerWithEmailAndPassword(userEmailPass);
            navigate("/login");

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            {<SignUpForm submitFunc={signUpWithEmail}/>}
        </div>
    );
};

export default SignUp;