import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { logFCrashError } from '../helper/crashWrapper';

export const googleCall = async ()=>{
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return userInfo;
      } catch (error) {
        await logFCrashError(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          return null;
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          return null;
        } else {
          // some other error happened
          return null;
        }

        return null;
    }
}