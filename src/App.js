import React from 'react';
import axios from 'axios'
import './App.css';
import { UserLogin } from './components/UserLogin';
import { Card } from './components/Card'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }

  handleSearch = (input) => {
    console.log(input.search)
    this.setState({
      data: this.state.data.filter(item => item.first_name.toLowerCase().includes(input.search))
    })
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        // console.log(res.data.data)
        this.setState({data: res.data.data})
      })
      .catch(err => console.error(err))
  }

render(){
    // console.log(this.state)
    return (
      <div className="App">
        <UserLogin handleSearch={this.handleSearch}/>
        {this.state.data.map(item => <Card item={item} />)}
      </div>
    );
  }
}

export default App;
