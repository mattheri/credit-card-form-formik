/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export const CreditCard = ({ cardHolder, numbers, month, year }) => {
	return (
		<Card style={{maxWidth: "20rem", height: "11rem"}} className='bg-black mx-auto text-white w-100'>
			<Card.Body style={{paddingTop: "6rem"}} className='position-relative'>
				<div className='position-absolute bg-white rounded-5' style={{top: "1rem", left: "1rem", width: "3rem", height: "3rem"}}></div>
				<Stack>
					<div>{numbers}</div>
					<Stack direction='horizontal' className='justify-content-between flex-wrap'>
						<div className='flex-grow-1'>
							<p>{cardHolder}</p>
						</div>
						<Stack direction='horizontal' className='align-items-center'>
							<p className='mb-0'>{month}</p>/<p className='mb-0'>{year}</p>
						</Stack>
					</Stack>
				</Stack>
			</Card.Body>
		</Card>
	)
}