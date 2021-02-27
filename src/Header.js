import React from 'react'
// Import jquery
import $ from 'jquery'
class Header extends React.Component{
    render(){
        return(
            <div class='text-center'>
                <div style={{'margin':'100px auto'}} class=''>
                    <button onclick='darkMode()' class='btn-dark-mode'>Dark Mode</button>
                    <h1 class='font-weight-bold header-h1 text-shadow'>Website <span>Learning</span> Course <span>React</span> Developer</h1>
                    <p class='header-p1 text-shadow'>Never Give Up to be a <span>Professional</span> Developer</p>
                </div>
                <div style={{'margin':'80px auto'}} class=''>
                    <p class='header-p2 text-shadow'>This web-apps created by <span>Mochamad Rafli Ramadhan</span></p>
                    <p class='header-p3'>Copyright <span>2021</span></p>
                </div>
            </div>
        )
    }
}

$('.header-h1').addClass('text-underlined');
$("button").click(function(){
    $("div").addClass('dark-mode');
});
export default Header