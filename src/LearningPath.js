import React from 'react'
// Import Component from Bootstrap
import {Col, Container, Row} from 'react-bootstrap'
// Import external file
import AccordionOutput from './Bootstrap-Accordion.js'
import CardBootstrap from './Bootstrap-Card.js'
// Import Data
import LearningPathData from './LearningPathData.js'

class OutputCardContainer extends React.Component{
  render(){

    let Data = LearningPathData
    
    return(
      <div>
        <h1 class='h1-font text-center' id='Abs'>Learning <span>Path</span></h1>
        <>
          <Container className=''>
            <Row className='' style={{'margin':'20px auto'}}>

              <>
                {Data.map(el => {
                  return(
                    <Col sm className='' style={{'margin':'2px'}}>
                      <CardBootstrap 
                      bgColor='card-1 background-color-pink'
                      className='' 
                      textColor='text-light' 
                      title     ={el.title} 
                      tingkat   ={el.tingkat} 
                      keterangan={el.keterangan} 
                      img       ={el.img} 
                      link      ={el.link} 
                      url       ={el.url}
                      />
                    </Col>
                  )
                })}
              </>
            
            </Row>
          </Container>
        </>
      </div>
    )
  }
}
export default OutputCardContainer