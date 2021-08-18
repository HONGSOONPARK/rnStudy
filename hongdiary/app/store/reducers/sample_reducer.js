// 리듀서는 state와 action을 인자로 받아와서 분기처리한다

export default function(state={}, action){
    switch (action.type) {
        case 'SAMPLE':
            return state;
        default:
            return state;
    }
}