import React, { Component } from 'react'
import WithCounter from './WithCounter'


class HoverCounter extends Component {
    
    
    render() {
        // Destructure from this.props
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>
                Hovered {count} times
            </h2>
        )
    }
}

export default WithCounter(HoverCounter, 10)
