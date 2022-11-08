import { logFCrashError } from "../helper/crashWrapper"
import axios from "./axios"

export const fetchNewsApiCaller = async ()=>{
    
    try{
        const axiosClient = axios()

        const _res = await axiosClient.get("/latest_headlines", {params: {lang: 'en', media: 'True'}})    

        return {
            status: true,
            data: _res.data,
            message: "News Fetched",
        }
    }catch(error){
        console.log(error)
        logFCrashError(error);
        return {
            status: false,
            message: "An error occurred",
            error
        }
    }
}