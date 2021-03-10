import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
// Import Data
import Repo from './Data-Repo.js'
class AccordionTitle extends React.Component{
    render(){
        return(
            <Accordion.Toggle as={Card.Header} eventKey={this.props.eventkey}>
                <p class='p2-font'>{this.props.title}</p>
            </Accordion.Toggle>
        )
    }
}
class AccordionText extends React.Component{
    render(){
        return(
            <div>
                <Accordion.Collapse eventKey={this.props.eventkey}>
                    <Card.Body>
                        <p class='p2-font'>Repository number {this.props.number}: {this.props.url}</p>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        )
    }
}
class AccordionOutput extends React.Component{
    render(){
        return(
            <div>
                <Accordion defaultActiveKey="0" class='accordion'>
                    {Repo.map (el => {
                        return(    
                            <Card>
                                <AccordionTitle title={el.title} eventkey={el.eventkey}/> 
                                <AccordionText number={el.number} url={el.url} eventkey={el.eventkey}/>
                            </Card>
                        )
                    })}
                </Accordion>
            </div>
        )
    }
}
export default AccordionOutput