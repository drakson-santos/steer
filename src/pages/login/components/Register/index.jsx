// import ButtonMain from "../../../../components/basic/button"
// import InputMain from "../../../../components/basic/input"
// import TitleMain from "../../../../components/basic/title"
// import "./register.css"

// const Register = ({
//     setIsFirstLogin,
//     setLoginIsSuccess
//  }) => {
//     return (
//         <div id="Register">
//             <TitleMain title="Seja Bem-vindo!"/>
//             <InputMain
//                 placeholder="Nome de usuário"
//             />
//             <InputMain
//                 placeholder="Email"
//             />
//             <InputMain
//                 placeholder="Senha"
//             />
//             <InputMain
//                 placeholder="Confirme a senha"
//             />
//             <ButtonMain
//                 title="Se Cadastrar"
//                 action={() => setLoginIsSuccess(true)}
//             />
//             <div
//                 className="steer-color-secondary"
//                 onClick={() => setIsFirstLogin(false)}
//             >
//                 Já tem uma conta? Faça login
//             </div>
//         </div>
//     )
// }

// export default Register

import {
    MDBContainer,
    MDBInput,
} from 'mdb-react-ui-kit';
import ButtonMain from '../../../../components/basic/button';

const Register = ({
    setIsFirstLogin,
    setLoginIsSuccess
}) => {

    return (
        <MDBContainer fluid className='d-flex flex-column align-items-center mx-auto w-100'>
            <h2 className="fw-bold mb-2 text-uppercase">
                Bem Vindo!
            </h2>

            <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Nome de usuário'
                id='formControlLg'
                type='text'
                size="lg"
            />

            <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Email'
                id='formControlLg'
                type='email'
                size="lg"
            />

            <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Senha'
                id='formControlLg'
                type='password'
                size="lg"
            />

            <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Confirme a senha'
                id='formControlLg'
                type='password'
                size="lg"
            />
            <ButtonMain
                title="Cadastrar"
                action={() => setLoginIsSuccess(true)}
            />
            <div>
                <p className="mb-0">Já tem uma conta? <a onClick={() => setIsFirstLogin(false)} class="text-white-50 fw-bold">Faça login</a></p>
            </div>
        </MDBContainer>
    )
}
export default Register