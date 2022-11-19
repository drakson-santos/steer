import { MDBBtn } from 'mdb-react-ui-kit'
import "./button.css"

const ButtonMain = ({
	title,
	action
}) => {
	return (
		<MDBBtn
			id="MDBSteerBtn"
			outline
			className='mx-2 px-5'
			color='white'
			size='lg'
			onClick={action}
		>
			{title}
		</MDBBtn>
	)
}

export default ButtonMain