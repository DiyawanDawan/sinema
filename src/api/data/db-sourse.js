import API_ENDPOINT from "../global/api-endpoint";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzEzYWQxOWQxMGRmZjVlYjI1YjM4Y2Q2NzNlMzM4NiIsInN1YiI6IjY0OTRmZjM3ZDVmZmNiMDBhZDg0YTZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Yh0gJyITW_4mdb9lcgXzb486mCppMjMqs4wOeyadFE",
  },
};
class DbSourse {
  static async NowPlaying() {
    try {
      const response = await fetch(API_ENDPOINT.NOW_PLAYING, options);
      const responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }
  static async TrandingMuvies() {
    try {
      const response = await fetch(API_ENDPOINT.TRADING_MUVIE, options);
      const responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }
  static async TrandingAll() {
    try {
      const response = await fetch(API_ENDPOINT.TRADING_ALL, options);
      const responseJson = await response.json();
      // console.log(responseJson);
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }
  static async TopReted() {
    try {
      const response = await fetch(API_ENDPOINT.TOP_RETED, options);
      const responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }
  static async Upcaming() {
    try {
      const response = await fetch(API_ENDPOINT.UPCAMING, options);
      const responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }

  static async DiscoverTv() {
    try {
      const response = await fetch(API_ENDPOINT.DISCOVER_TV, options);
      const responseJson = await response.json();
      // console.log(responseJson);
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  }
  static async Recomendation(id) {
   try{
    const response = await fetch(API_ENDPOINT.RECOMENDATION(id), options);
    const responseJson = await response.json()
    // console.log(responseJson.results);
    return responseJson.results;
   } catch (err) {
    console.log('Eror cuy', err)
   }
  }
  static async Datail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id), options);
      const responseJson = await response.json();

      // console.log('data detail',responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async DatailTV(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_TV(id), options);
      const responseJson = await response.json();

      // console.log('data detail',responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}

export default DbSourse;
