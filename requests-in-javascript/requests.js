const axios = require("axios")

const url = "http://localhost:5001/constellations/"
// axios.get(url)
//   .then((response) => {
//     console.log(response.status)
//     console.log(response.statusText)
//     console.log(response.data)
//   })
//   .catch((error)=> {
//     console.log(error.message)
//   })

  axios.get("malformed url").catch((error) => {
    console.log(error.message);
  });