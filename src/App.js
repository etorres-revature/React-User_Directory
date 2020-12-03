import { Component } from "react";
import Spinner from "./components/Spinner/Spinner";
import Navbar from "./components/layout/Navbar";
import CardList from "./components/card/CardList";
import Searchbox from "./components/Searchbox/Searchbox";
import SortBySelect from "./components/SortBySelect/SortBySelect";
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

  lastNameAsc = () => {
    const users = this.state.users.sort((a, b) =>
      a.name.last.localeCompare(b.name.last));
    this.setState({ users: users });
  };

  lastNameDesc = () => {
    const users = this.state.users.sort((a, b) =>
    b.name.last.localeCompare(a.name.last));
  this.setState({ users: users });
  };

  firstNameAsc = () => {
    const users = this.state.users.sort((a, b) =>
    a.name.first.localeCompare(b.name.first)
  );
  this.setState({ users: users });
  };

  firstNameDesc = () => {
    const users = this.state.users.sort((a, b) =>
    b.name.last.localeCompare(a.name.last)
  );
  this.setState({ users: users });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.last.toLowerCase().includes(searchField.toLowerCase())
    );

    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="App">
          <Navbar />
          <Searchbox
            placeholder="search for users by last name"
            handleChange={this.handleChange}
          />
          <SortBySelect lastNameAsc={this.lastNameAsc} 
          lastNameDesc={this.lastNameDesc}
          firstNameAsc={this.firstNameAsc}
          firstNameDesc={this.firstNameDesc}
          />
          <CardList users={filteredUsers} />
        </div>
      );
    }
  }
}

export default App;
