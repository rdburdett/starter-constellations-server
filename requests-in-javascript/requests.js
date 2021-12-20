const axios = require("axios")

const BASE_URL = "http://localhost:5001";
// const constellationsUrl = `${BASE_URL}/constellations`;

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`
    axios.delete(url)
    return {id:id}
  })
  return Promise.all(promises)
}

bulkDelete(['KGQIwSq', '32TN5F8']).then(console.log)

// function getConstellations(ids) {
//   const promises = ids.map((id) => {
//     const url = `${BASE_URL}/constellations/${id}`;
//     return axios.get(url);
//   });

//   return Promise.all(promises);
// }

// const ids = ["KGQIwSq", "32TN5F8"];
// getConstellations(ids)
// .then((results) => {
//     results.forEach((result) => console.log(result.data))
//   })



Promise.all([
  axios.get(`${BASE_URL}/constellations/UEUrlfX`),
  axios.get(`${BASE_URL}/constellations/zb8QvVt`),
  axios.get(`${BASE_URL}/constellations/32TN5F8`),
]).then(console.log)
  .then((results) => {
    results.forEach((result) => console.log(result.data))
  });

// const leo = {
//   "name": "Leo",
//   "meaning": "Lion",
//   "starsWithPlanets": 19,
//   "quadrant": "NQ2",
//   "id": "ZHEvJ5o"
// }

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`
  return axios
    .get(url)
    .then(() => {
      return axios.put(url, body)
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error.message
    })
}
// updateIfExists("ZHEvJ5o", leo)

// module.exports = {
//   updateIfExists,
// };

// .then(({ data }) => {
//   const exists = data.find(({ name }) => name === body.name)
//   if (!exists) throw error.message
//   console.log(data)
//   return data
// })

// const leo = {
//   name: "Leo",
//   meaning: "Lion",
//   starsWithPlanets: 19,
//   quadrant: "NQ2",
// };

// //////////////////////////////////////////

// // axios
// //   .get(constellationsUrl)
// //   .then(({ data }) => {
// //     const exists = data.find(({ name }) => name === leo.name);
// //     if (exists) throw `Constellation "${leo.name}" already exists.`;
// //     return axios
// //       .post(constellationsUrl, leo)
// //       .then(({ data }) => console.log(data));
// //   })
// //   .catch(console.log);

// //////////////////////////////////////////

// axios
// .get(constellationsUrl)
// .then(({ data }) => {
//   return data.find(({ name }) => name === leo.name);
// })
// .then((exists) => {
//   if (exists) throw `Constellation "${leo.name}" already exists.`;
//   return axios
//     .post(constellationsUrl, leo)
//     .then(({ data }) => console.log(data));
// })
// .catch(console.log);

// //////////////////////////////////////////



// //////////////////////////////////////////