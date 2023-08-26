import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Advisors = () => {
  return (
    <>
    
    <div className="container mx-auto" style={{width:'50%'}} >

    <Card style={{ width: '400px',height:'450px',margin:'50px',display:'flex',border:'none',display:'flex' }}>
     
      <Card.Img variant="top" src="./images/p4.png"style={{width:'200px',height:'200px',borderRadius:'50%',borderTop:'10px solid #8E24AA',borderBottom:'3px solid #8E24AA' }} />
      <Card.Body>
        <Card.Title>Akhil Tripathi</Card.Title>
        <Card.Text>
        Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER

        </Card.Text>
        <Button variant="" style={{borderLeft: '4px solid #8E24AA',
borderRight: '1px solid #8E24AA',borderTop:'2px solid #8E24AA',borderBottom:'2px solid #8E24AA',color:'#8E24AA',borderRadius:'50px'}}><a href="mailto:supportsciastra.com" class="mail-button"style={{color:'#8E24AA',textDecoration:'none'}}>Message now!</a></Button>
      </Card.Body>
    </Card>
         
    <Card style={{ width: '400px',height:'450px',margin:'50px',display:'flex',border: 'none',display:'flex'  }}>
     
      <Card.Img variant="top" src="./images/p1.jpg"style={{width:'200px',height:'200px',borderRadius:'50%',borderTop:'10px solid #8E24AA',borderBottom:'3px solid #8E24AA'}} />
      <Card.Body>
        <Card.Title>Vivek Dwivedi</Card.Title>
        <Card.Text>
        Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER

        </Card.Text>
        <Button variant="" style={{borderLeft: '4px solid #8E24AA',
borderRight: '1px solid #8E24AA',borderTop:'2px solid #8E24AA',borderBottom:'2px solid #8E24AA',color:'#8E24AA',borderRadius:'50px'}}><a href="mailto:supportsciastra.com" class="mail-button"style={{color:'#8E24AA',textDecoration:'none'}}>Message now!</a></Button>
      </Card.Body>
    </Card>
    </div>
    
   
    </>
  )
}


export default Advisors
