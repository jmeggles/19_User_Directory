import React from "react";
import axios from "axios";
import Title from "./components/Title";
import Footer from "./components/Footer";
import SearchBar from "./pages/SearchBar";
import "./style.css";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=250&nat=us").then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        {this.state.employees.length > 0 && (
          <SearchBar employees={this.state.employees} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
