import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Player = (props) => {
    console.log('player props: ',props)
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"400px"}}variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <h4>Age:{props.age}</h4>
          <h5>jerseyNumber:{props.jerseyNumber}</h5>
          <h5>Nationality:{props.Nationality}</h5>
          <h5>Team:{props.team}</h5>
        </Card.Text>
        

      </Card.Body>
    </Card>
    </div>
  )

}
Player.defaultProps={
    name:"NA",
    age:"NA",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"
}
export default Player
