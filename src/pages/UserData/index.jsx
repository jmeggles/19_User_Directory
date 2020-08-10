import React from "react";
import Search from "../../components/Search";
import Users from "../../components/Users";
import API from "../../utils/API";
import "./style.css";

class UserData extends React.Component {
  state = {
    users: [],
    filtered: [],
    search: "",
    sorted: false,
  };

  componentDidMount() {
    API.getUsers()
      .then((response) =>
        this.setState({
          users: response.data.results,
          filtered: response.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  searchForm = (e) => {
    console.log(e.target.name, e.target.value);
  };

  render() {
    console.log(this.state);


    // var arr3 = arr1.map((x) => String.fromCharCode(x + 65));


    // var arr5 = arr1.filter((x, i) => !(i % 2));


    
    return (
      <>
        <Search searchForm={this.searchForm} />
        <br />

        <table>
          <tbody>
            {this.state.filtered.map((user, index) => (
              <Users key={index + "-person"} user={user} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default UserData;
