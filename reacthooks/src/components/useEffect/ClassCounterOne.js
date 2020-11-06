import React, { Component } from 'react'

class ClassCounterOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }



    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            console.log('Updating doc title')
            document.title = `Clicked ${this.state.count} times`
        }     
    }

    render() {
        return (
            <div>


                <div>

                    <input type='text' value={this.state.name}
                        onChange={e => {
                            this.setState({ name: e.target.value })
                        }} />

                        <p>{this.state.name}</p>
                </div>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}> Clicked {this.state.count} times</button>


                </div>

                <div>
                    <h3>
                        Clicked {this.state.count} times
             </h3>
                </div>
            </div>
        )
    }
}

export default ClassCounterOne
