import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
let data = [
    {
        judul:'About Author',
        keterangan: 'Hello Iam a undergraduate student in Universitas Gadjah Mada. Iam making this website as my concern to share my knowledge all about front end that I know. So, with this website I hope that it will be helped you to get some of free learning source and  Iam really excited to know about what can I improve about this website. Thanks!.' 
    },
    {
        judul:'My social media',
        keterangan:'LinkedIn, Instagram, and Gmail'
    }
]
class AccordionChild extends React.Component{
    render(){
        return(
            <Card style={{'width':'60%'}}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    {this.props.judul}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{this.props.keterangan}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}
class AccordionParent extends React.Component{
    render(){
        return(
            <>
                <Accordion defaultActiveKey="0">
                    <>
                    {data.map(el => {
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
class AccordionBootstrap extends React.Component{
    render(){
        return(
            <AccordionParent/>
        )
    }
}
export default AccordionBootstrap