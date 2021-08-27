const request = require("request");

const catAPI = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  breedAPI = catAPI + breedName;
  console.log(breedAPI);
  request(breedAPI, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error);
    } else if (!data[0].description) {
      console.log(data);
      return callback(error, "Breed not found");
    } else {
      return callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
