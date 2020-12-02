import { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Cardlist from "./components/card/Cardlist";
import Searchbox from "./components/Searchbox/Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=90")
      .then((response) => response.json)
      .then((users) => this.setState({ users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Navbar />
        <Searchbox
          placeholder="search for users"
          handleChange="this.handleChange"
        />
        <Cardlist users={filteredUsers} />
      </div>
    );
  }
}

export default App;
