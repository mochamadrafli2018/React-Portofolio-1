import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
let Title = [
  {
    Id:1,
    title:'Dasar-dasar pemrograman berbasis PHP',
    keterangan:'Pelajari learning path CSS Framework, cara kerjanya dan Buat Desaign Portofolio Milikmu.'
  },
  {
    Id:2,
    title:'Belajar CSS Preprocessing dengan SASS',
    keterangan:'Pelajari libarary java script paling populer di github yang dikembangkan oleh Facebook.'
  },
  {
    Id:3,
    title:'Dasar-dasar sintaks Java Scipt & ES 6',
    keterangan:'Pelajari framework populer di github yang dikembangkan oleh mantan engineer Google'
  }
]
//Card Bootstrap
//margin dan padding di sini untuk card
class CardBootstrap extends React.Component{
  render(){
    return(
      <>
        <Card class='card' border="dark" style={{'padding':'5px'}}>
          <Card.Img variant="top" 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" 
          style={{'margin':'0px'}}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.keterangan}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <br></br>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

class ContainerBootstrap extends React.Component{
  render(){
    return(
        <>
          <Container class='borderblack'>
              <Row class='borderblack' style={{'margin':'5px'}}>
                <>
                  {Title.map(el => {
                    return(
                      <Col sm class='borderblack' style={{'margin': '2px', 'padding':'auto','width':'auto'}}>                  
                        <CardBootstrap class='border-black' title={el.title} keterangan={el.keterangan}/>
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

/*
const ContainerBootstrap = () => {
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
}
*/


class Cardcontainer2 extends React.Component{
    render(){
        return(
            <ContainerBootstrap/>
        )
    }
}
export default Cardcontainer2;