
import Modal from '../../components/basic/modal';
import LoginContent from './components/loginContent';
import "./login.css"

import SteerLogo from "../../assets/images/steer-logo.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
	const [loginIsSuccess, setLoginIsSuccess] = useState(false)
	const navigate = useNavigate();

	useEffect(() => {
		if (loginIsSuccess) navigate('/home');
	}, [loginIsSuccess]);

	return (
		<div
			id="LoginComponent"
			className="
				div-style-h100
			"
		>
			<img
				src={SteerLogo}
				alt="SteerLogo"
				className="login-steer-logo"
			/>
			<Modal>
				<LoginContent setLoginIsSuccess={setLoginIsSuccess}/>
			</Modal>
		</div>
	)
}

export default LoginComponent