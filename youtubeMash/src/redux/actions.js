export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE= 'SET_USER_AGE';
export const INCREASE_AGE= 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

// const API_URL = 'https://mocki.io/v1/133c042d-d938-438a-a007-4279843d3bcf';

const API_URL = 'http://125.242.169.153:3333/api/main/notice/a/';
// 125.242.169.153/api/main/notice/a/

// get
export const getCities = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json' ,
                }
            });
            const json = await result.json();
            if(json){
                
                const data = json['data'];
                // console.log(data);
                dispatch({
                    type: GET_CITIES,
                    payload: data
                });
            }else{
                console.log('Unable to fetch');
            }
        }
    }catch(error){
        console.log
    }
}

// post
export const getCitiesPost = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json' ,
                },
                body: JSON.stringify({
                    param1: 'value',
                    param2: 'value2',
                })
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            }else{
                console.log('Unable to fetch');
            }
        }
    }catch(error){
        console.log
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};


export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};