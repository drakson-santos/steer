import "./login-content.css"
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

const LoginContent = ({ setLoginIsSuccess }) => {
    const [isFirstLogin, setIsFirstLogin] = useState(false);


    return (
        <div id="login-content">
            {
                isFirstLogin ?
                <Register
                    setIsFirstLogin={setIsFirstLogin}
                />
                :
                <Login
                    setIsFirstLogin={setIsFirstLogin}
                    setLoginIsSuccess={setLoginIsSuccess}
                />
            }
        </div>
    );
}

export default LoginContent