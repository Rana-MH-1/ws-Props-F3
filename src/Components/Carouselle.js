import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carouselle = ({person1,person2,person3}) => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {person1.imgUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{person1.name}</h3>
          <p>{person1.Bio}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={person2.imgUrl}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{person2.name}</h3>
          <p>{person2.Bio}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={person3.imgUrl}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{person3.name}</h3>
          <p>
          {person3.Bio} </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carouselle