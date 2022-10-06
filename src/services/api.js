const axios = require("axios");

const baseURL = process.env.API_URL;

const api = axios.create({ baseURL });

module.exports = { api };
