import React, { Component, Fragment } from 'react';
import XjjItem from './XjjItem';
class Xjj extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'jsp',
            list:['精油推背','波推飞机']
        }
    }
    render() {
        let inputChange = (e)=>{
            console.log(e);
            this.setState({
                inputValue: e.target.value
            });
        }
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={inputChange}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <XjjItem 
                            key={index+item} 
                            content={item}
                            index = {index}
                            deleteItem={this.deleteItem.bind(this)}
                            />
                        );
                    })
                }
                </ul>
            </Fragment>
        );
    }
    addList(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        });
    }
    deleteItem(index){
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list
        });
    }
    
}
export default Xjj;