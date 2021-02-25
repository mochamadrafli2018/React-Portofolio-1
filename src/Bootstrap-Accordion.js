import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import Author from './Data-Author.js'
class AccordionChild extends React.Component{
    render(){
        return(
            <Card style={{'width':'60%'}}>
                <Accordion.Toggle as={Card.Header} eventKey="0">{this.props.judul}</Accordion.Toggle>
                <Accordion.Collapse eventKey="0"><Card.Body>{this.props.keterangan}</Card.Body></Accordion.Collapse>
            </Card>
        )
    }
}
class AccordionBootstrap extends React.Component{
    render(){
        return(
            <>
                <Accordion defaultActiveKey="0">
                    <>
                    {Author.map(el => {
                        return(
                            <AccordionChild  judul = {el.judul} keterangan = {el.keterangan}/>    
                        )
                    })}
                    </>
                </Accordion>
            </>
        )
    }
}

export default AccordionBootstrap