import React from 'react'
import Author from './ProfileData.js'
class OutputProfileChild extends React.Component{
    render(){
        return(
            <div className='card-2'>
                <p class='p1-font text-center'>{this.props.judul}</p>
                <p class='p2-font text-left'>{this.props.keterangan}</p>
            </div>
        )
    }
}
class OutputProfile extends React.Component{
    render(){
        return(
            <>
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