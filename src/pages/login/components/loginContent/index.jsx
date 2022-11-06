import TitleMain from "../../../../components/basic/title";
import ButtonMain from '../../../../components/basic/button';
import InputMain from '../../../../components/basic/input';
import "./login-content.css"

const LoginContent = () => {

    return (
        <div id="login-content">
            <TitleMain />
            <InputMain />
            <InputMain />
            <ButtonMain />
            <div
                className="steer-color-secondary "
            >
                Ainda não tem uma conta? Cadastre-se
            </div>
        </div>
    );
}

export default LoginContent