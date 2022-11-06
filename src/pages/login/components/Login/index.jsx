import TitleMain from "../../../../components/basic/title";
import ButtonMain from '../../../../components/basic/button';
import InputMain from '../../../../components/basic/input';

const Login = ({ setIsFirstLogin }) => {
    return (
        <>
            <TitleMain title="Seja Bem-Vindo de volta!"/>
            <InputMain 
                placeholder="Nome de usuário"
            />
            <InputMain 
                placeholder="Senha"
            />
            <ButtonMain title="Entrar"/>
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