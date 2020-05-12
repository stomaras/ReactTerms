import React, { Component } from 'react'


class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        
    }

    focusTextInput() {
        //Explicity focus th text input using the raw DOM API
        //Note: we are accessing "current" to get the DOM node
        this.textInput.current.focus();
    }
    
    render() {
        // tell React that we want to associate the <input> ref
        // with the 'textinput' that we created in the constructor
        return (
            
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input 
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default CustomTextInput
