import ButtonMain from "../../../../components/basic/button"
import InputMain from "../../../../components/basic/input"
import TitleMain from "../../../../components/basic/title"
import "./register.css"

const Register = ({
    setIsFirstLogin,
    setLoginIsSuccess
 }) => {
    return (
        <div id="Register">
            <TitleMain title="Seja Bem-vindo!"/>
            <InputMain
                placeholder="Nome de usuário"
            />
            <InputMain
                placeholder="Email"
            />
            <InputMain
                placeholder="Senha"
            />
            <InputMain
                placeholder="Confirme a senha"
            />
            <ButtonMain
                title="Se Cadastrar"
                action={() => setLoginIsSuccess(true)}
            />
            <div
                className="steer-color-secondary"
                onClick={() => setIsFirstLogin(false)}
            >
                Já tem uma conta? Faça login
            </div>
        </div>
    )
}

export default Register