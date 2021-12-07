const axios = require("axios")

const url = "http://localhost:5001/constellations/"

// let constellationArray =  
//   axios
//     .get(url)

//     .then((response) => {
//       response.data
//     })

//     .then((data) => {
//       console.log(data)
//       return data
//     })


// console.log(constellationArray)


axios.get(url)
  .then((response) => {
    console.log("status: ", response.status, response.statusText)
    console.log("data: ", response.data)
  })
  .catch((error)=> {
    console.log(error.message)
  })

