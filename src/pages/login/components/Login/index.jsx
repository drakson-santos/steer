import TitleMain from "../../../../components/basic/title";
import ButtonMain from '../../../../components/basic/button';
import InputMain from '../../../../components/basic/input';


import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = ({
    setIsFirstLogin,
    setLoginIsSuccess
}) => {

    return (
        <>
            <TitleMain title="Seja Bem-Vindo!"/>
            <InputMain
                icon={
                    <AiOutlineUser
                        size={30}
                        color="white"
                    />
                }
                placeholder="Email"
            />
            <InputMain
                icon={
                    <RiLockPasswordLine
                        size={30}
                        color="white"
                    />
                }
                placeholder="Senha"
            />
            <ButtonMain
                title="Entrar"
                action={() => setLoginIsSuccess(true)}
            />
            <div
                className="steer-color-main"
                onClick={() => setIsFirstLogin(true)}
            >
                Ainda não tem uma conta? Cadastre-se
            </div>
        </>
    )
}

export default Login