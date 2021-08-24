import { GET_DIARIES } from '../types';
import axios from 'axios';

// api 
import { SIGNUP, SIGNIN, REFRESH, auth, database } from '../../utils/misc';


// fcm 서버에서 데이터 갖고오기
export function getDiaries(User) {

    return (dispatch) => {
        const url = `diary/${User.auth.userId}`;
        database.ref(url).on('value', dataSnapShot => {
            const diaryData = [];
            for (let key in dataSnapShot.val()) {
                if (dataSnapShot.val()[key]) {
                    diaryData.push({
                        ...dataSnapShot.val()[key]
                    })
                }
            }
            dispatch({type: GET_DIARIES, payload: diaryData})
        })
    }
}
  

// 서버에서 데이터 갖고오기
export function getDiariesBackup(User) {
    const request = axios({
        method: 'GET',
        url: 'https://rn-testman-default-rtdb.firebaseio.com/diary.json'
    }).then(response =>{
        const diaryData = [];
        for (let key in response.data){
            if(response.data[key]){
                diaryData.push({
                    ...response.data[key]
                })
            }
        }
        return diaryData;
    }).catch(err=>{
        alert("Get Failed!! [getDiaries] ");
        return false;
    })

    return {
        type: GET_DIARIES,
        payload: request
    }
}