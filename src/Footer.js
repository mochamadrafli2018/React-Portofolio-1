import React from 'react'
// Import data
import Icon from './Data-Icon.js'
class IconOutput extends React.Component{
    render(){
        return(
            <li class='footer-li'>
                <a href={this.props.url} target="_blank"><img src={this.props.img} class='footer-icon'/></a>
            </li>
        )
    }
}
class Footer extends React.Component{
    render(){
        return(
            <ul class='footer-ul'>
                {Icon.map ( el => {
                    return(
                        <IconOutput img={el.img} url={el.url}/>
                    )
                })}
            </ul>
        )
    }
}
export default Footer