// import TitleMain from "../../../../components/basic/title";
// import ButtonMain from '../../../../components/basic/button';
// import InputMain from '../../../../components/basic/input';


// import { AiOutlineUser } from 'react-icons/ai';
// import { RiLockPasswordLine } from 'react-icons/ri';

// const Login = ({
//     setIsFirstLogin,
//     setLoginIsSuccess
// }) => {

//     return (
//         <>
//             <TitleMain title="Seja Bem-Vindo!"/>
//             <InputMain
//                 icon={
//                     <AiOutlineUser
//                         size={30}
//                         color="white"
//                     />
//                 }
//                 placeholder="Email"
//             />
//             <InputMain
//                 icon={
//                     <RiLockPasswordLine
//                         size={30}
//                         color="white"
//                     />
//                 }
//                 placeholder="Senha"
//             />
//             <ButtonMain
//                 title="Entrar"
//                 action={() => setLoginIsSuccess(true)}
//             />
//             <div
//                 className="steer-color-main"
//                 onClick={() => setIsFirstLogin(true)}
//             >
//                 Ainda não tem uma conta? Cadastre-se
//             </div>
//         </>
//     )
// }

// export default Login

import React from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBIcon
} from 'mdb-react-ui-kit';
import ButtonMain from '../../../../components/basic/button';

function Login({
	setIsFirstLogin,
	setLoginIsSuccess,
}) {
	return (
		<MDBContainer fluid className='d-flex flex-column align-items-center mx-auto w-100'>
			<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
			<p className="text-white-50 mb-5">Faça seu login!</p>

			<MDBInput
				wrapperClass='mb-4 mx-5 w-100'
				labelClass='text-white'
				label='Email address'
				id='formControlLg'
				type='email'
				size="lg"
			/>
			<MDBInput
				wrapperClass='mb-4 mx-5 w-100'
				labelClass='text-white'
				label='Password'
				id='formControlLg'
				type='password'
				size="lg"
			/>

			<ButtonMain
				title="Login"
				action={() => setLoginIsSuccess(true)}
			/>
			<div>
				<p className="mb-0">Don't have an account? <a onClick={() => setIsFirstLogin(true)} class="text-white-50 fw-bold">Sign Up</a></p>
			</div>
		</MDBContainer>
	);
}

export default Login;