import React from 'react'
import crashlytics from '@react-native-firebase/crashlytics';

export const logFCrashError = (error)=>{
    crashlytics().log('An error occurred at time: '+ (new Date()).toISOString());
    crashlytics().recordError(error);

    return error;
}