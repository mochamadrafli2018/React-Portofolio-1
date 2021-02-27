import React from 'react'
// Import data author
import Author from './Data-Author.js'
class AccordionChild extends React.Component{
    render(){
        return(
            <div className='accordion card'>
                <h1 class='accordion-p1 text-center'>{this.props.judul}</h1>
                <p class='accordion-p2'>{this.props.keterangan}</p>
            </div>
        )
    }
}
class OutputProfile extends React.Component{
    render(){
        return(
            <>
                <h1 class='accordion-h1 text-center'>My <span>Profile</span></h1>
                    <>
                        {Author.map(el => {
                            return(
                                <AccordionChild  judul = {el.judul} keterangan = {el.keterangan}/>
                            )
                        })}
                    </>
            </>
        )
    } 
}

export default OutputProfile