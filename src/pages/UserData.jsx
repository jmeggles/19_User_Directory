import React from "react";
// import Search from "./Search";
import Users from "./Users";
// import API from "../utils/API";

class UserData extends React.Component {
  state = {
    alphabetical: true,
    ascending: true,
    sortedEmployees: [],
    employees: [],
  };

  componentDidMount() {
    if (this.state.sortedEmployees.length < 1) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  // componentDidUpdate(prevProps) {
  //     if (this.props.empList !== prevProps.empList) {
  //         this.setState({
  //             sortedEmployees: this.props.empList
  //         })
  //     }
  // }

  sortName = () => {
    let sortEmp = [];
    if (this.state.alphabetical) {
      sortEmp = this.props.empList.sort((a, b) => {
        let nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }

    this.setState({
      alphabetical: !this.state.alphabetical,
      sortedEmployees: sortEmp,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div>
            <p>Photo</p>
          </div>
          <div>
            <p onClick={this.sortName} className="name">
              <u>Name</u>: &#x2195;
            </p>{" "}
          </div>
          <div></div>
          <div>
            <p>Age</p>
          </div>
          <div>
            <p>Phone</p>
          </div>
          <div>
            <p>Email</p>
          </div>
        </div>

        {this.state.sortedEmployees.length > 0 &&
          this.state.sortedEmployees.map((item, index) => (
            <Users
              image={item.picture.large}
              first={item.name.first}
              last={item.name.last}
              age={item.dob.age}
              phone={item.cell}
              email={item.email}
            />
          ))}
      </div>
    );
  }
}

export default UserData;
