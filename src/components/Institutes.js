import React from 'react'
import Cardinstitute from './Cardinstitute'
import PropTypes from 'prop-types'
const Institutes = (props) => {
  return (
    <div className="container">
      <div className='row my-3'>
        <Cardinstitute  institutename={"Cambridge University"} description={" top university...."}/>
        <Cardinstitute   institutename={"Harvard University"} description={" knowledge and top university...."} />
      <Cardinstitute   institutename={"University of Illinious"} description={"High quality of education..."} />
      <Cardinstitute   institutename={"Universityof edinberg"} description={" top university..."} />
      <Cardinstitute   institutename={"Hambolt University berlin"} description={"knowledge and top university...."} />
      <Cardinstitute   institutename={"University of california"} description={"top university..."} />
      <Cardinstitute   institutename={"University of malibu"} description={" malibu's top university..."} />
      <Cardinstitute   institutename={"Princeton University"} description={"High quality of education..."} />
     

      </div>
    </div>
  );
};

export default Institutes;