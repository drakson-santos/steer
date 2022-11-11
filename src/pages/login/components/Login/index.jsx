import TitleMain from "../../../../components/basic/title";
import ButtonMain from '../../../../components/basic/button';
import InputMain from '../../../../components/basic/input';

const Login = ({
    setIsFirstLogin,
    setLoginIsSuccess
}) => {

    return (
        <>
            <TitleMain title="Seja Bem-Vindo de volta!"/>
            <InputMain
                placeholder="Nome de usuário"
            />
            <InputMain
                placeholder="Senha"
            />
            <ButtonMain
                title="Entrar"
                action={() => setLoginIsSuccess(true)}
            />
            <div
                className="steer-color-secondary"
                onClick={() => setIsFirstLogin(true)}
            >
                Ainda não tem uma conta? Cadastre-se
            </div>
        </>
    )
}

export default Login