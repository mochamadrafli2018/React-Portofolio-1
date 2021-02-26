import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div class='text-center'>
                <div style={{'margin':'100px auto'}}>
                    <h1 class='font-weight-bold text-shadow' style={{'font-size':'30px'}}>Website Learning Course React Developer</h1>
                    <p class='text-shadow' style={{'font-size':'25px'}}>Never Give Up to be a Professional Developer</p>
                </div>
                <div style={{'margin':'80px auto'}}>
                    <p class='text-shadow' style={{'font-size':'20px'}}>This website created by Mochamad Rafli Ramadhan</p>
                    <p style={{'position':'relative','bottom':'0px'}}>Copyright 2021</p>
                </div>
            </div>
        )
    }
}
export default Header