import React, { Component } from 'react';
import Son1 from './Son1'
import Son2 from './Son2'
class Father extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp1:0,
            temp2:0
         }
    }
    render() { 
        const {temp1,temp2}=this.state
        return ( 
            <div>
                <h1>温度转换器</h1>
                <Son1 tempValue={temp1} trans={this.c2f.bind(this)}/>
                <Son2 tempValue={temp2} trans={this.f2c.bind(this)}/>
            </div>
         );
    }
    c2f(celsius){
        this.setState({
            temp1:celsius,
            temp2:(celsius * 9 / 5) + 32
        })
    }
    f2c(fahrenheit){
        this.setState({
            temp1:(fahrenheit - 32) * 5 / 9,
            temp2:fahrenheit,
        })
    }
}
 
export default Father;