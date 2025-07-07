import SignUpForm from "../templates/SignUp/SignUpForm.tsx";
import type {SignupData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthSevice.ts";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass: SignupData = {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
        }
        console.log(data.fullName)
        try {
            await registerWithEmailAndPassword(userEmailPass);
            navigate("/signin");

        } catch (e) {
            console.log(e);
        }

    }
    return (
        <div>
            {<SignUpForm submitFn={signUpWithEmail}/>}
        </div>
    );
};

export default SignUp;