import React from 'react'
// Import data author
import Author from './Data-Author.js'
class OutputProfileChild extends React.Component{
    render(){
        return(
            <div className='card-2'>
                <p class='p1-font text-center'>{this.props.judul}</p>
                <p class='p2-font'>{this.props.keterangan}</p>
            </div>
        )
    }
}
class OutputProfile extends React.Component{
    render(){
        return(
            <>
                <h1 class='card-1-h1 text-center'>My <span>Profile</span></h1>
                <>
                    {Author.map(el => {
                        return(
                            <OutputProfileChild  judul = {el.judul} keterangan = {el.keterangan}/>
                        )
                    })}
                </>
            </>
        )
    } 
}

export default OutputProfile