import React from "react";
import UserData from "./UserData";

class SearchBar extends React.Component {
  state = {
    searchName: "",
    filtered: [],
  };

  componentDidMount() {
    if (this.state.filtered.length < 1) {
      this.setState({
        filtered: this.props.employees,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      searchName: e.target.value,
    });
    let userType = e.target.value;
    const filteredList = this.props.employees.filter((user) => {
      let values =
        user.name.first +
        user.name.last +
        user.dob.age +
        user.phone +
        user.email;
      return values.indexOf(userType) !== -1;
    });

    this.setState({
      filtered: filteredList,
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.searchName}
            name="searchName"
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            placeholder="Type name here"
          />
        </form>
        <hr></hr>
        {this.state.filtered.length > 0 && (
          <UserData empList={this.state.filtered} />
        )}
      </div>
    );
  }
}

export default SearchBar;
