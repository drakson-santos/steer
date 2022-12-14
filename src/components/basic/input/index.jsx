import "./input.css"

const InputMain = ({
	icon,
	placeholder,
}) => {

	return (
		<div id="InputMain">
			<div className="input-icon">
				{icon}
			</div>
			<input
				className="input-main"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	)
}

export default InputMain