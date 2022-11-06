import "./input.css"
import { AiOutlineUser } from 'react-icons/ai';

const InputMain = () => {
	return (
		<div id="InputMain">
			<div className="input-icon">
				<AiOutlineUser 
					size={30}
					color="white"
				/>
			</div>
			<input className="input-main" type="text"/>
		</div>
	)
}

export default InputMain