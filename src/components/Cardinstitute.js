import React from 'react'
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const Cardinstitute = (props) => {
  let { institutename, description } = props;
  return (
    <div className='col-md-4' style={{display:'flex'}}>
      <Card className="card my-3" style={cardStyle}>
        <Card.Body>
          <Card.Title>{institutename}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const cardStyle = {
  width: '18rem',
  border: '2px solid #8E24AA',
};

export default Cardinstitute
