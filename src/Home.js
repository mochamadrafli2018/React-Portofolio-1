import React from 'react'
import Footer from './HomeFooter.js'
import OutputProfile from './Profile.js';
import $ from 'jquery'

class HomeDisplay extends React.Component{
    render(){
        return(
            <div class='text-center'>
                <div style={{'margin':'10px auto 0px auto','width':'95%'}} class='margin-header'>
                    <h1 class='font-weight-bold h1-font text-shadow'>Website <span>Learning</span> Course <span>React</span> Developer</h1>
                    <p class='p1-font text-shadow'>Start to be a <span>Professional</span> Developer</p>
                </div>
                <div style={{'margin':'10px auto 20px auto','width':'95%'}} class=''>
                    <p class='p2-font text-shadow'>This web-apps created by <span>Mochamad Rafli Ramadhan</span></p>
                </div>
                <div>
                    <OutputProfile/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default HomeDisplay