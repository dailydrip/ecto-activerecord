import apisauce from "apisauce";

const BASE_URL = "https://www.dailydrip.com/api";
const dailyVideoUrl = () => `${BASE_URL}/drips/?daily=1`;

const authToken = process.env.GATSBY_API_TOKEN;

const rawInstance = apisauce.create({
  baseURL: `${BASE_URL}`
});

const authedInstance = () => {
  return apisauce.create({
    baseURL: `${BASE_URL}`,
    headers: { Authorization: `Token token=${authToken}` }
  });
};

export default {
  getDailyContent: function getDailyContent() {
    return authedInstance()
      .get(dailyVideoUrl())
      .then(response => response.data);
  }
};
