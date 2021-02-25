import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div>
                <div class='text-center' style={{'margin':'100px auto'}}>
                    <h1 class='font-weight-bold text-shadow' style={{'font-size':'30px'}}>Website Learning Course React Developer</h1>
                    <p class='text-shadow' style={{'font-size':'25px'}}>Never Give Up to be a Professional Developer</p>
                    <p class='text-shadow' style={{'font-size':'20px','margin':'80px auto'}}>This website created by Mochamad Rafli Ramadhan</p>
                </div>
            </div>
        )
    }
}
export default Header