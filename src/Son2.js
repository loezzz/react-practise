import React, { Component } from 'react';


class Son2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {tempValue,trans}=this.props
        return ( 
            <div>
                <input value={tempValue} onChange={(e)=>trans(e.target.value)}/>
                <span>华氏度</span>
            </div>
         );
    }
}
 
export default Son2;