export const LOGIN = 'LOGIN'

export function login(){
    return {
        type:'LOGIN'
    }
}

export function user(state = 10, action) {

    switch (action.type) {
        case LOGIN :
            return state + 11;
        default :
            return state;
    }
}
