export const ADD_COUNT = 'ADD_COUNT'

export function addCount(){
    return {
        type:'ADD_COUNT'
    }
}

export function count(state = 0, action) {
    console.log('111111111')
    switch (action.type) {
        case ADD_COUNT :
            console.log('adaddd')
            return state + 1;
        default :
            return state;
    }
}
