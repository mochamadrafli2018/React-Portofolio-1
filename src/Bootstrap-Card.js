import React from 'react'
// Import Component from Bootstrap
import {Card, Col, Container, Row} from 'react-bootstrap'
// Import Data
import AccordionOutput from './Bootstrap-Accordion.js'
import Title from './Data-Card.js'

//Card Bootstrap
class CardBootstrap extends React.Component{
  render(){
    return(
      <>
        <Card className='card-1 background-color-pink' border="dark" style={{'padding':'5px'}}>
          <Card.Img variant="top" src={this.props.img} className='img-round' style={{'margin':'0px'}}/>
          <Card.Body>
            <Card.Title className='font-weight-bold letter-spacing text-light'>{this.props.title}</Card.Title>
            <Card.Text class='text-light'>{this.props.keterangan}</Card.Text>
            <Card.Link href={this.props.url} class='text-light'>Go To &#xf061;</Card.Link>
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
        <Container className=''>
          <Row className='' style={{'margin':'20px auto'}}>

            <>
              {Title.map(el => {
                return(
                  <Col sm className='' style={{'margin':'2px', 'padding':''}}>                  
                    <CardBootstrap className='' title={el.title} keterangan={el.keterangan} img={el.img} url={el.url}/>
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

class OutputCardContainer extends React.Component{
  render(){
    return(
      <div>
        <h1 class='h1-font text-center' id='Abs' style={{'font-size':''}}>Learning <span>Path</span></h1>
        <AccordionOutput/>
        <ContainerBootstrap/>
      </div>
    )
  }
}
export default OutputCardContainer;