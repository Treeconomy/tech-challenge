// I decided not to install axios or apisauce for this service since this is only a
// small project with only one endpoint and I think this would be an overkill. In a big
// project I would install one of these libraries as shown below.

class MainService {
    baseUrl = "https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json";

    async getData() {
        const response = await fetch(this.baseUrl);
        const data = await response.json();
        return data;
    }
}

/* 
import axios from 'axios';

const baseUrl = "https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json"

const axiosInstance = axios.create({
        baseURL,
        headers: {
            Accept: 'application/json',
            apiKey: process.env.REACT_APP_MAIN_API_KEY,
            withCredentials: true
        }
    });

class Main Service {
    axiosInstance = axiosInstance;

    baseUrl = baseUrl;

    getData() {
        return this.axiosInstance.get();
    }
}
*/

const mainService = new MainService();

export default mainService;
