const session = {
    set(key,value){
        if(typeof(value) == 'object'){
            value = JSON.stringify(value)
        }
        sessionStorage.setItem(key,value)
        return {
            key:key,
            value,value
        }
    },
    get(key){
        return JSON.parse(sessionStorage.getItem(key))
    },
    has(key){
        return sessionStorage.getItem(key)!==null
    },
    remove(key){
        sessionStorage.removeItem(key)
        return sessionStorage
    },
    clear(){
        sessionStorage.clear()
    }
}


export default session
