import { useState } from 'react'
import { CreditCard } from './components/CreditCard/CreditCard'
import { CreditCardBackface } from './components/CreditCardBackface/CreditCardBackface'
import { CreditCardForm } from './components/CreditCardForm/CreditCardForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Formik } from "formik"
import * as Yup from "yup"

function App() {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  })

  const initialValues = {
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  }

  const onSubmit = (values) => {
    setCreditCardInfo(values)
  }

  const cardHolderRegex = /^[a-z ,.'-]+$/i;
  const numbersRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  const monthRegex = /^(0[1-9]|1[0-2])$/;
  const yearRegex = /^(0[1-9]|1[0-9])$/;
  const cvcRegex = /^[0-9]{3}$/;

  const validationSchema = Yup.object({
    cardHolder: Yup.string().required('Required').matches(cardHolderRegex, 'Invalid name'),
    numbers: Yup.string().required('Required').matches(numbersRegex, 'Invalid card number, please use the format 0000 0000 0000 0000'),
    month: Yup.string().required('Required').matches(monthRegex, 'Invalid month'),
    year: Yup.string().required('Required').matches(yearRegex, 'Invalid year'),
    cvc: Yup.string().required('Required').matches(cvcRegex, 'Invalid CVC'),
  })

  return (
    <Container fluid>
      <Container style={{minHeight: "100vh",display: "grid", placeItems: "center"}}>
        <Row className='w-100'>
          <Col>
            <Container className='h-100'>
              <Stack gap={1} className='justify-content-center h-100'>
                <CreditCard
                  numbers={creditCardInfo.numbers}
                  cardHolder={creditCardInfo.cardHolder}
                  month={creditCardInfo.month}
                  year={creditCardInfo.year}
                />
                <CreditCardBackface cvc={creditCardInfo.cvc} />
              </Stack>
            </Container>
          </Col>
          <Col>
            <Container>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnChange
                validationSchema={validationSchema}
              >
                <CreditCardForm />
              </Formik>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
