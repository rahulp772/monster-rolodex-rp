import react, {Component} from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => { 
      this.setState({ monsters: users })
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render(){
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handlerFunction={this.handleChange}/>
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;