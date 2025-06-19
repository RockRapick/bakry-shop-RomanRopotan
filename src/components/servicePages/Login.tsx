import {Paths} from "../../utils/paths.ts";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    return (
        <button className={'login'} onClick={() => navigate('/' + Paths.SIGNING)}>Sign In</button>

    );
};

export default Login;