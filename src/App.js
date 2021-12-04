import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/searchbox/searchbox.component.jsx';
import './App.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
      };

  }

    // convert response into JSON then setstate
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({monsters:users}));
  }
  
  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  // map iterates over every elements of the array
  //prop parameters
  render() {
    const {monsters, searchField} =this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
      return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = 'search monster'
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
