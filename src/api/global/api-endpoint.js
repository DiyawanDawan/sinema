import CONFIG from "./config";


const API_ENDPOINT = {
    NOW_PLAYING: `${CONFIG.BASE_URL}/movie/now_playing${CONFIG.DEFAULT_LANGUAGE}`,
    TRADING: `${CONFIG.BASE_URL}/movie/popular${CONFIG.DEFAULT_LANGUAGE}`,
    TOP_RETED: `${CONFIG.BASE_URL}/movie/top_rated${CONFIG.DEFAULT_LANGUAGE}`,
    UPCAMING: `${CONFIG.BASE_URL}/movie/upcoming${CONFIG.DEFAULT_LANGUAGE}`,
    DETAIL_Muvie_Video: (id) =>  `${CONFIG.BASE_URL}/movie/${id}/videos${CONFIG.DEFAULT_LANGUAGE}`,
    GENERE_MUVIES: `${CONFIG.BASE_URL}/genre/movie/list${CONFIG.DEFAULT_LANGUAGE}`,
    DISCOVER_TV: `${CONFIG.BASE_URL}/discover/tv${CONFIG.DEFAULT_LANGUAGE}`,
    DETAIL_TV: (id) =>  `${CONFIG.BASE_URL}/tv/${id}`,
    DETAIL_TV_Video: (id) =>  `${CONFIG.BASE_URL}/tv/${id}/videos`,
    DETAIL: (id) =>  `${CONFIG.BASE_URL}movie/${id}`,
  };
  
  export default API_ENDPOINT;