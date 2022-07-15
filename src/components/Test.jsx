import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
   
    // componentDidMount() {

    // }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.number !== this.props.number) {
            console.log('');
            this.setState({
                num: 0;
            })
        }
    }

    handleClick = () => {
        this.setState((state) => ({ num: state.num + 1 }));
    }

    render() {
        return (
            <>
                <Counter number={this.state.num} />
                <div onClick={this.handleClick.bind(this)}>{this.props.number}Test</div>
            </>
        )
    }

}
