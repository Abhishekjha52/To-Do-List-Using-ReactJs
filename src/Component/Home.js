import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate()
  return (
    <div className='mainHome'>
        <h1 className='headingHome'>WELCOME TO THE TO-DO-LIST-APP</h1>
        <Button variant="primary" className='btn1' onClick={() => navigate('/main')}>Get Started</Button>{' '}
    </div>
  )
}
