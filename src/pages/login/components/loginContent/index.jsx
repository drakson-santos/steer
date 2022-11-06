import "./login-content.css"
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

const LoginContent = () => {
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
                /> 
            }
        </div>
    );
}

export default LoginContent