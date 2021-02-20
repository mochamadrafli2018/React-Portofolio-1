import React from 'react'
// Import Component from Bootstrap
import {Card, Col, Container, Row} from 'react-bootstrap'
// Import Data
import Title from './Data.js'

//Card Bootstrap
class CardBootstrap extends React.Component{
  render(){
    return(
      <>
        <Card className='card background-color-pink' border="dark" style={{'padding':'5px'}}>
          <Card.Img variant="top" src={this.props.img} className='img-round' style={{'margin':'0px'}}/>
          <Card.Body>
            <Card.Title className='font-weight-bold letter-spacing text-light'>{this.props.title}</Card.Title>
            <Card.Text class='text-light'>{this.props.keterangan}</Card.Text>
            <Card.Link href="#" class='text-light'>Go To &#xf061;</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

//Container
class ContainerBootstrap extends React.Component{
  render(){
    return(
      <>
        <Container class='border-black'>
          <Row class='border-black' style={{'margin':'5px'}}>
            <>
              {Title.map(el => {
                return(
                  <Col sm class='border-black' style={{'margin': '2px', 'padding':'auto'}}>                  
                    <CardBootstrap class='border-black' title={el.title} keterangan={el.keterangan} img={el.img}/>
                  </Col>
                )
              })}
            </>
          </Row>
        </Container>
      </>
    )
  }
}

//Raw Bootstrap Component
/*const ContainerBootstrap = () => {
    return(
        <>
        <Container class='borderblack'>
            <Row class='borderblack' style={{'margin':'5px'}}>
                <Col sm class='borderblack' style={{'margin': '2px', 'padding':'auto','width':'auto'}}>                  
                  <CardBootstrap class='border-black'/>
                </Col>
                <Col sm class='borderblack' style={{'margin': '2px' }}>
                  <CardBootstrap class='border-black'/>
                </Col>
                <Col sm class='borderblack' style={{'margin': '2px' }}>
                  <CardBootstrap class='border-black'/>
                </Col>
            </Row>
        </Container>
        </>
    )
}*/

export default ContainerBootstrap;