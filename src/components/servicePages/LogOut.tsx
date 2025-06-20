import Button from "@mui/material/Button";
import {logoutAction} from "../../redux/slices/authSlice.ts";
import {useAppDispatch} from "../../redux/hooks.ts";

const LogOut = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    alert("Are you sure?");
                    dispatch(logoutAction())
                }}
            >
                LogOut
            </Button>
        </div>
    );
};

export default LogOut;