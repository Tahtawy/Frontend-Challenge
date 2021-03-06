import axios from 'axios';

export default {
    getFirstUserId () {
        let firstUserId = axios.get('https://api.github.com/users?since=null&per_page=1').then((response) => {
            return response.data[0].login;
        });
        return firstUserId;
    },
    getSingleUser (userLogin) {
        let user = axios.get('https://api.github.com/users/'+userLogin).then((response) => {
            return response.data;
        });
        return user;
    }
}