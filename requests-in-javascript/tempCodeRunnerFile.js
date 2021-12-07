axios.get(url)
  .then((response) => {
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.data)
  })
  .catch((error)=> {
    console.log(error.message)
  })
