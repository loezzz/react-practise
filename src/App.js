import React,{Component} from 'react';

class App extends Component {
    render(){
        return (
            <ul className='my-list'>
                <li>{false?'hello world':'hello sd'}</li>
                <li>i love react</li>
            </ul>
        );
    }
}

export default App;