import React from 'react'
// Import jquery
import $ from 'jquery'
class Header extends React.Component{
    render(){
        return(
            <div class='text-center'>
                <div style={{'margin':'100px auto'}}>
                    <button onclick='darkMode()' class='btn-dark-mode'>Dark Mode</button>
                    <h1 class='font-weight-bold text-shadow' style={{'font-size':'30px'}}>Website <span>Learning</span> Course <span>React</span> Developer</h1>
                    <p class='text-shadow' style={{'font-size':'25px'}}>Never Give Up to be a <span>Professional</span> Developer</p>
                </div>
                <div style={{'margin':'80px auto'}}>
                    <p class='text-shadow' style={{'font-size':'20px'}}>This website created by <span>Mochamad Rafli Ramadhan</span></p>
                    <p style={{'position':'relative','bottom':'0px'}}>Copyright <span>2021</span></p>
                </div>
            </div>
        )
    }
}

$("h1").addClass('text-underlined');
$("button").click(function(){
    $("div").addClass('dark-mode');
});
export default Header