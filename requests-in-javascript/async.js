const axios = require("axios")

const BASE_URL = "http://localhost:5001";

async function getConstellationNameById(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  try {
    const { data, status, statusText } = await axios.get(url)
    return [data, status, statusText]
  } catch (error) {
    throw `Constellation with id of ${id} could not be found.`
  }
}

getConstellationNameById("n2OEOzp").then(console.log)

