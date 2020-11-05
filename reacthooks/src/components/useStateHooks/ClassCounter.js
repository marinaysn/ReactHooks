import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => { 
            return {count: prevState.count + 1 }});
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Add Count: {this.state.count}</button>

                <button onClick={this.decrementCount}> Subtract Count: {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
