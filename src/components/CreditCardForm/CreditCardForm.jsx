/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Input } from '../Input/Input';

export const CreditCardForm = ({ formData, onChange }) => {
	return (
		<Form>
			<Form.Group className='mb-3' controlId='cardHolder'>
				<Form.Label>Card Holder</Form.Label>
				<Input type='text' placeholder='e.g. Jane Appleseed' id="cardHolder" value={formData.cardHolder} onChange={onChange} pattern="(\w|\s)+" />
			</Form.Group>

			<Form.Group className='mb-3' controlId='numbers'>
				<Form.Label>Card Number</Form.Label>
				<Input type='text' placeholder='e.g. 1234 5678 9123 0000' value={formData.numbers} onChange={onChange} pattern="\d+" />
			</Form.Group>

			<Form.Group className='mb-3' controlId='month'>
				<Form.Label>Month</Form.Label>
				<Input type='text' placeholder='MM' value={formData.month} onChange={onChange} pattern="\d+" />
			</Form.Group>

			<Form.Group className='mb-3' controlId='year'>
				<Form.Label>Year</Form.Label>
				<Input type='text' placeholder='YY' value={formData.year} onChange={onChange} pattern="\d+" />
			</Form.Group>

			<Form.Group className='mb-3' controlId='cvc'>
				<Form.Label>CVC</Form.Label>
				<Input type='text' placeholder='e.g. 123' value={formData.cvc} onChange={onChange} pattern="\d+" />
			</Form.Group>

			<Button variant='dark' className='d-block w-100'>Submit</Button>
		</Form>
	)
}