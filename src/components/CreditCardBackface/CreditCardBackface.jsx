/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export const CreditCardBackface = ({ cvc }) => {
	return (
		<Card style={{maxWidth: "20rem", height: "11rem"}} className='bg-black mx-auto text-white w-100'>
			<Card.Body style={{paddingTop: "6rem"}} className='position-relative'>
				<Stack direction='horizontal' className='justify-content-end bg-dark p-2'>
					<div className='ml-auto'>{cvc}</div>
				</Stack>
			</Card.Body>
		</Card>
	)
}