import React, { Component } from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    
    
    render() {
        const node = this.myRef.current;
        console.log(this.myRef);
        return <div ref={this.myRef} />;
    }
}

export default MyComponent
