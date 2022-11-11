import Button from 'react-bootstrap/Button';

const ButtonMain = ({
	title,
	action
}) => {
	return (
		<Button onClick={action} variant="primary">
            {title}
        </Button>
	)
}

export default ButtonMain