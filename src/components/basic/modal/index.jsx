import "./modal.css"

const Modal = ({children}) => {
	return (
		<div 
			id="Modal" 
			className="
				box-shadow-all
				steer-color-main
			"
		>
			{children}
		</div>
	)
}

export default Modal