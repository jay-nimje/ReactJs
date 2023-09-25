import React, { Component } from 'react'

export class Img extends Component {

    componentDidMount(){
        console.log('DidMount')
    }

    componentWillUnmount(){
        console.log('WillUnMount')
    }
    render() {
        return (
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" height="200px" width="200px" alt="" />
            </div>
        )
    }
}

export default Img