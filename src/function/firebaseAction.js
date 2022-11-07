import firestore from '@react-native-firebase/firestore';
import CONFIG from '../constant/config';

export const updateUser = async (data)=>{
    const { email } = data;

    const _res = await firestore().doc(`${CONFIG.FIRESTORE.COLLECTION.USER}/${email}`).set(data);
}