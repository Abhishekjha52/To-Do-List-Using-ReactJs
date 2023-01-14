import React from 'react'
import Alert from 'react-bootstrap/Alert';
export default function Todo(props) {
  return (
    <div>
        <Alert key='primary' variant='primary'>
          {props.data}
        </Alert>
    </div>
  )
}
