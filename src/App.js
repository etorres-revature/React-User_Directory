import { Component } from "react";
import Spinner from "./components/Spinner/Spinner";
import Navbar from "./components/layout/Navbar";
import CardList from "./components/card/CardList";
import Searchbox from "./components/Searchbox/Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=120&nat=us")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users: users.results, loading: false });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.last.toLowerCase().includes(searchField.toLowerCase())
    );

    if (this.loading) {
      return <Spinner />;
    } else {
      <div className="App">
        <Navbar />
        <Searchbox
          placeholder="search for users by last name"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>;
    }
  }
}

export default App;
