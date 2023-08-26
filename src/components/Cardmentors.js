import React from 'react'
import Card from 'react-bootstrap/Card';

const Cardmentors = (props) => {
  
  let { mentorname, college, imageurl} = props

  return (
    <div className='container' style={{width:'200px',height:'200px'}}>
      <Card style={{border:'none',display:'flex' }}>
      <Card.Img variant="top" src="./images/p7.png" style={{width:'70%',height:'120px',objectFit:'cover',borderRadius:'100%'}} />
      <Card.Body>
        <Card.Title>{mentorname}</Card.Title>
        <Card.Text>
        {college}
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Cardmentors
