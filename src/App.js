import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      inputValue:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
        <button onClick={this.handleButton}>提交</button>
        <ul>
          {
            this.state.list.map((val,index)=>{
              return (
                <li key={index}>{val}<button onClick={this.handleDelete}>删除</button></li>
              )
            })
          } 
        </ul>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
			inputValue: e.target.value
		})
  }
  handleButton() {
    this.setState({
			inputValue: '',
			list: [...this.state.list, this.state.inputValue]
		})
  }
  handleDelete(e) {
    console.log(e)
  }


}

export default App;
