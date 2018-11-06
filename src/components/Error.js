import React, { Component } from 'react';

class Error extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    
    render() { 
        if (this.state.hasError) {
        return ( <h2>You have an error!</h2> );
    }
    return this.props.children;
}
}
export default Error;