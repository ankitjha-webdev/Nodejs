console.log("Hello World Ankit");

// Call fake api call
const axios = require("axios");

function callApi() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res.data));
}

callApi();
