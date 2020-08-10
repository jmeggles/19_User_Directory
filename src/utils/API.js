import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getUsers: function () {
    // returns 100 random users with US information per the site: https://randomuser.me/documentation#howto
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};