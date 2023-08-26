import React from 'react'
import Institutes from './Institutes'
import Mentors from './Mentors'
import Advisors from './Advisors'
import MentorMain from './MentorMain'
const Mainpage = () => {
  

  return (
    <>
    <div className='container' style={{display:'flex'}}>
      <h1  style={{margin:'70px',height:'150px',width:'1000px',color: '#8E24AA',fontFamily:'Courier-BoldOblique'}}>Learn from Scientists, Research scholars from the top institutes in the world.</h1>
      
     
    </div>
     
    
    
    <div className="container" style={{display:'flex'}}>
    
    <Institutes/>
     </div>
     <div className="container" style={{display:'flex'}}>
      <h1  style={{margin:'80px',height:'150px',width:'1000px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}> MEET YOUR MENTORS </h1>
     </div>
     
     <Mentors/>

     <div className="mx-auto" style={{display:'flex',width:'50%'}}>
     <h1  style={{margin:'80px',height:'150px',width:'1000px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}> Mentor & Advisor </h1>
     </div>
     <div className="mx-auto" style={{display:'flex',width:'50%'}}>
    
     <MentorMain/>
     
     </div>
     <div className="mx-auto" style={{display:'flex',width:'50%'}}>
     <h1  style={{margin:'80px',height:'150px',width:'1000px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}> Founder and Co-founders </h1>
     </div>
     <div className='' style={{display:'flex'}}>
     <Advisors/>
     </div>
     
     </>
  )
}

export default Mainpage
