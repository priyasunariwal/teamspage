import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const MentorMain = () => {
  return (
    <div className='container 'style={{display:'flex'}} >
        
    <Card style={{ width: '300px',height:'450px',margin:'50px',border: 'none'  }}>
     
      <Card.Img variant="top" src="./images/p2.png"style={{width:'200px',height:'200px',borderRadius:'50%',border:'2px solid '}} />
      <Card.Body>
        <Card.Title><h4>Mentor & Advisor</h4></Card.Title>
        <Card.Text>
       <h6 >Principal Project Scientist at Indian Institute of Technology, Madras</h6>
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default MentorMain
