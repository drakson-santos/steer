import React from 'react';
import {
	MDBContainer,
	MDBInput,
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