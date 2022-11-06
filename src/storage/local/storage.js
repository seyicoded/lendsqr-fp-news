import AsyncStorage from "@react-native-async-storage/async-storage";
import CONFIG from "../../constant/config";

export const getUser = async ()=>{
    const _res = await AsyncStorage.getItem(CONFIG.STORAGE.USER);

    if(_res !== null){
        return {
            status: true,
            data: JSON.parse(_res)
        }
    }else{
        return {
            status: false,
            data: null
        }
    }
}