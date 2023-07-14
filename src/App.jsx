import { useState } from 'react'
import { CreditCard } from './components/CreditCard/CreditCard'
import { CreditCardBackface } from './components/CreditCardBackface/CreditCardBackface'
import { CreditCardForm } from './components/CreditCardForm/CreditCardForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

function App() {
  const [formData, setFormData] = useState({
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  })

  const onChange = (value, id) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <Container fluid>
      <Container style={{minHeight: "100vh",display: "grid", placeItems: "center"}}>
        <Row className='w-100'>
          <Col>
            <Container className='h-100'>
              <Stack gap={1} className='justify-content-center h-100'>
                <CreditCard numbers={formData.numbers} cardHolder={formData.cardHolder} month={formData.month} year={formData.year} />
                <CreditCardBackface cvc={formData.cvc} />
              </Stack>
            </Container>
          </Col>
          <Col>
            <Container>
              <CreditCardForm formData={formData} onChange={onChange} />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
