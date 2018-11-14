import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const to = (promise) => {//global function that will help use handle promise rejections, this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
    CONNECTION_ERROR = "Network error :("

    return promise
        .then(data => {
            return [null, data.data];
        }).catch(err => {
            console.log(err);
            if(err.response){
                return [err.response.data.error];
            }else{
                console.log("here");
                return [CONNECTION_ERROR];
            }

        });
}

export const config = (token) => {
    // if(AsyncStorage.getItem('agrosys:auth:token'!=null)){
    //     bearerToken = AsyncStorage.getItem('agrosys:auth:token');
    // }
    // bearerToken=token;
    return {
        headers: {
            'Authorization': token
        }
    }
}

export const URL = 'http://agrosys.cloud:3000/v1/';