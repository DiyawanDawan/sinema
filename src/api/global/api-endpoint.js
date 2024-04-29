import CONFIG from "./config";


const API_ENDPOINT = {
    NOW_PLAYING: `${CONFIG.BASE_URL}/movie/now_playing${CONFIG.DEFAULT_LANGUAGE}`,
    TRADING_MUVIE: `${CONFIG.BASE_URL}/movie/popular${CONFIG.DEFAULT_LANGUAGE}`,
    TRADING_ALL: `${CONFIG.BASE_URL}/trending/all/day${CONFIG.DEFAULT_LANGUAGE}`,
    // TRADING_ALL: `${CONFIG.BASE_URL}/trending/all/{time_window}${CONFIG.DEFAULT_LANGUAGE}`,
    TOP_RETED: `${CONFIG.BASE_URL}/movie/top_rated${CONFIG.DEFAULT_LANGUAGE}`,
    UPCAMING: `${CONFIG.BASE_URL}/movie/upcoming${CONFIG.DEFAULT_LANGUAGE}`,
    GENERE_MUVIES: `${CONFIG.BASE_URL}/genre/movie/list${CONFIG.DEFAULT_LANGUAGE}`,
    DISCOVER_TV: `${CONFIG.BASE_URL}/discover/tv${CONFIG.DEFAULT_LANGUAGE}`,
    
    DETAIL_TV: (id) =>  `${CONFIG.BASE_URL}/tv/${id}`,
    DETAIL: (id) =>  `${CONFIG.BASE_URL}movie/${id}`,
  };
  
  export default API_ENDPOINT;