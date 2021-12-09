const axios = require("axios")

const url = "http://localhost:5001/constellations"


axios
  .get(url)
  .then((response) => {
    console.log("status: ", response.status, response.statusText)
    console.log("data: ", response.data)
  })
  .catch((error)=> {
    console.log(error.message)
  })
  .catch({message})

