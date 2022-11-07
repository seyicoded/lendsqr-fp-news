import axios from 'axios'

export default ()=>{
    axios.defaults.baseURL = "https://newscatcher.p.rapidapi.com/v1/";
    axios.defaults.headers = {
        'X-RapidAPI-Key': '6e94c6abfamsh6994b0303413b6dp175147jsn17ab1d36ec5d',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }

    return axios;
}