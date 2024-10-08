import React from 'react'
import { Form } from 'react-bootstrap'

const PriceFilterComponent = ({ price, setPrice }) => {
  return (
    <div>
      <Form.Label>
        <span className='fw-bold'>Price no greater than:</span>$ {price}
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} onChange={(e) => setPrice(e.target.value)} />
    </div>
  )
}

export default PriceFilterComponent