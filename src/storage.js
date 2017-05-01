import {AsyncStorage} from react - native

class Identity {

    function setToken(token) {
        this.token = token
        return AsyncStorage.setItem('sessionToken', token)
    }

    function setUserinfo(userinfo) {
        this.userinfo = userinfo
        return AsyncStorage.setItem('sessionUserinfo', JSON.stringify(userinfo))
    }

    function getToken() {
        let found = this.token
        if (found) {
            return new Promise((resolve, reject) => {
                resolve(found)
            })
        }
        return AsyncStorage.getItem('sessionToken')
    }

    function getUserInfo() {
        let found = this.userinfo
        if (found) {
            return new Promise((resolve, reject) => {
                resolve(found)
            })
        }
        return AsyncStorage.getItem('sessionUserinfo').then((userinfo)=>JSON.parse(userinfo))
      }



    function removeToken() {
        this.token = null
        return AsyncStorage.removeItem('sessionToken')
    }

}
export let identity = new Identity();
