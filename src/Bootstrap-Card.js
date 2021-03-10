import React from 'react'
// Import Component from Bootstrap
import {Card} from 'react-bootstrap'
// Import External File
import AccordionOutput from './Bootstrap-Accordion.js'
// Card Bootstrap
class CardBootstrap extends React.Component{
    render(){
      return(
          <div>
            <>
              <Card className={this.props.bgColor} border="dark">
                <Card.Img variant="top" src={this.props.img} className='img-round'/>
                <Card.Body className={this.props.textColor}>
                  <Card.Title className='font-weight-bold letter-spacing'>{this.props.title}</Card.Title>
                  <Card.Text>{this.props.tingkat}</Card.Text>
                  <Card.Text>{this.props.keterangan}</Card.Text>
                  <Card.Link href={this.props.url} className={this.props.textColor}>Go To</Card.Link>
                </Card.Body>
              </Card>
            </>
          </div>
      );
    }
}  
//Container
export default CardBootstrap;