import React from "react";
import { Button, Card } from "react-bootstrap";
import propTypes from 'prop-types';


const Cardd = ({name,age,Bio,imgUrl,func,children}) => {
    //console.log(children);
    //const {name,age,Bio,imgUrl} = props
    //props.name='Ameni'
    // Props are read-only==> immutable==> we cannot change keys of props in the child Comp
    /*Uncaught TypeError: Cannot assign to read only property 'name' of object */
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {Bio}
          </Card.Text>
          <Card.Text>
           {age}
          </Card.Text>
          <Button onClick={func} variant="primary">Show My name</Button>
        </Card.Body>
        {children}
      </Card>
    </div>
  );
};

Cardd.propTypes={
    name: propTypes.string.isRequired,
    age: propTypes.number,
    Bio:propTypes.string,
    imgUrl : propTypes.string,
    func: propTypes.func,
    children: propTypes.element
}

Cardd.defaultProps={
    name:'user',
    age:10,
    Bio:'I am a user'
}

export default Cardd;

//we changed the type of value name into number
/* ==> Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Cardd`, expected `string`.
    at Cardd */

//we eliminate the key name 
/* Warning: Failed prop type: The prop `name` is marked as required in `Cardd`, but its value is `undefined`.
    at Cardd */




