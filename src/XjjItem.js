import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XjjItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {}
        =this.state
        const {
            content
        }=this.props
        return ( 
        <li onClick={this.handleClick.bind(this)}>{content}</li>
         );
    }
    handleClick(){
        console.log(this.props);
        this.props.deleteItem(this.props.index)
    }
}
XjjItem.propTypes = {
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
export default XjjItem;