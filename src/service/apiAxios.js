import axios from "axios";

const apiAxios = axios.create({
  timeout: 60000000,
  headers: {
    "X-Custom-Header": "foobar",
    "Access-Control-Allow-Origin": "*",
  },
});

export { apiAxios };
