import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong</h1>
        }
        //  this.props.children refers to the component we are actually rendering 
        return this.props.children
    }
}

export default ErrorBoundary
