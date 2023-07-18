/* eslint-disable react/prop-types */
import BsForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Form } from 'formik';
import { Input } from '../Input/Input';

export const CreditCardForm = () => {
	return (
		<Form as={BsForm} noValidate>
			<Input
				label="Card Holder"
				type='text'
				placeholder='e.g. Jane Appleseed'
				id="cardHolder"
			/>
			<Input
				label="Card Numbers"
				type='text'
				placeholder='e.g. 1234 5678 9123 0000'
				id="numbers"
			/>
			<Input
				label="Month"
				type='text'
				placeholder='MM'
				id="month"
			/>
			<Input
				label="Year"
				type='text'
				placeholder='YY'
				id="year"
			/>
			<Input
				label="CVC"
				type='text'
				placeholder='e.g. 123'
				id="cvc"
			/>

			<Button type='submit' variant='dark' className='d-block w-100'>Submit</Button>
		</Form>
	)
}