import Form from 'react-bootstrap/Form';

// eslint-disable-next-line react/prop-types
export const Input = ({ onChange, type, value, ...rest }) => {
	const handleChange = (event) => {
		const value = event.target.value;
		onChange(value, event.target.id);
	}

	return <Form.Control type={type} value={value} onChange={handleChange} {...rest} />;
}
