
import Modal from '../../components/basic/modal';
import LoginContent from './components/loginContent';
import "./login.css"
import { useNavigate } from 'react-router-dom';


const LogoTitle = () => {

	return (
		<span
			id="LogoTitle"
			className="
				font-size-7rem
				font-weight-800
			"
		>
			Steer
		</span>
	)
}

const LoginComponent = () => {
	const navigate = useNavigate();

	return (
		<div
			id="LoginComponent"
			className="
				div-style-h100
				steer-color-background-main
			"
		>
			<LogoTitle />
			<Modal>
				<LoginContent setLoginIsSuccess={() => navigate('/home')}/>
			</Modal>
		</div>
	)
}

export default LoginComponent