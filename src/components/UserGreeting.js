import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {





        //3rd way
        return this.state.isLoggedIn ? (
            <div>Welcome Tom</div> 
        )    :    (
            <div>Welcome guest</div>
        )


        //2nd approach
        //let message 
        //if (this.state.isLoggedIn) {
        //    message = <div>Welcome Tom</div>
        //} else {
        //    message = <div>Welcome guest</div>
        //}

        //return <div>{message}</div>




        // 1st Way
        //if(this.state.isLoggedIn){
        //    return <div> Welcome Tom </div>
        //} else {
        //    return <div> Welcome guest </div>
        //}
        // return (
        //    <div>
        //        <div>Welcome Tom</div>
        //        <div>Welcome guest</div>
        //    </div>
        //)
        
    }
}

export default UserGreeting
