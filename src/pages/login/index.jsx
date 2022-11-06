
import Modal from '../../components/basic/modal';
import LoginContent from './components/loginContent';
import "./login.css"

import SteerLogo from "../../assets/images/steer-logo.png"

const LoginComponent = () => {
	
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
				<LoginContent />
			</Modal>
		</div>
	)
}

export default LoginComponent