import React from 'react'
import Footer from './Footer.js'
import $ from 'jquery'

class HomeDisplay extends React.Component{
    render(){
        return(
            <div class='text-center'>
                <div style={{'margin':'50px auto'}} class='margin-header'>
                    <button onclick='darkMode()' class='btn-dark-mode'>Dark Mode</button>
                    <h1 class='font-weight-bold h1-font text-shadow'>Website <span>Learning</span> Course <span>React</span> Developer</h1>
                    <p class='p1-font text-shadow'>Never Give Up to be a <span>Professional</span> Developer</p>
                </div>
                <div style={{'margin':'80px auto'}} class=''>
                    <p class='p2-font text-shadow'>This web-apps created by <span>Mochamad Rafli Ramadhan</span></p>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default HomeDisplay