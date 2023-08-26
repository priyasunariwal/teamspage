import React from 'react'
import Cardmentors from './Cardmentors'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Mentors = (props) => {
 



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "block", color: "black", background: "#000000bd"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000000bd" }}
      onClick={onClick}
    />

    </>
  );
}

  const settings = {
    dots: false,
    
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
          initialSlide: 2

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        
          slidesToScroll: 1
        }
      }
    ]
   
  };
 const sectionStyle = {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ccc',
  };

  const headingStyle = {
    color: '#8E24AA',
    textAlign: 'center',
    marginBottom: '20px',
  };
  return (
   <>
    
   
    <div className='container' style={{}}>
    <h1 style={{marginBottom:'0px',height:'100px',width:'100px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}>Biology</h1>
    <Slider {...settings}>
     <Cardmentors mentorname={"priyaa"}  college={"thadomal university"} />
     <Cardmentors mentorname={"shreya"}  college={"mumbai university"}/>
     <Cardmentors mentorname={"manav"}  college={"pune university"}/>
     <Cardmentors mentorname={"dhruvi"}  college={"iit"}/>
     <Cardmentors mentorname={"piyush"}  college={"nit"}/>
     <Cardmentors mentorname={"piku"}  college={"nit"}/>
     <Cardmentors mentorname={"byeee"}  college={"vellore"}/>
     </Slider>
    </div>
  
   
    <div className='container' style={{marginTop:'70px'}}>
    <h1 style={{margin:'0px',height:'100px',width:'100px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}>Chemistry</h1>
    <Slider {...settings}>
    <Cardmentors mentorname={"priyaa"}  college={"thadomal"} />
     <Cardmentors mentorname={"shreya"}  college={"vellore"}/>
     <Cardmentors mentorname={"manav"}  college={"nit"}/>
     <Cardmentors mentorname={"dhruvi"}  college={"iit"}/>
     <Cardmentors mentorname={"piyush"}  college={"pune university"}/>
     <Cardmentors mentorname={"piku"}  college={"mumbai university"}/>
     <Cardmentors mentorname={"byeee"}  college={"nit"}/>
     </Slider>
    </div>
    
    <div className='container ' style={{marginTop:'70px'}}>
    <h1 style={{margin:'0px',height:'100px',width:'100px',color: '#8E24AA',textAlign:'center',fontFamily:'Courier-BoldOblique'}}>Mathematics</h1>
    <Slider {...settings}>
    <Cardmentors mentorname={"priyaa"}  college={"thadomal"} />
     <Cardmentors mentorname={"shreya"}  college={"vellore"}/>
     <Cardmentors mentorname={"manav"}  college={"nit"}/>
     <Cardmentors mentorname={"dhruvi"}  college={"iit"}/>
     <Cardmentors mentorname={"piyush"}  college={"pune university"}/>
     <Cardmentors mentorname={"piku"}  college={"mumbai university"}/>
     <Cardmentors mentorname={"byeee"}  college={"nit"}/>
     </Slider>
    </div>
   
    </>
  )
}
Mentors.defaultProps = {
  mentorname: 'Cambridge', 
  college: 'okay'
}

   Mentors.propTypes = {
  mentorname: PropTypes.string, 
  college:  PropTypes.string
}
export default Mentors
