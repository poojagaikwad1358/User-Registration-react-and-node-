import axios from 'axios';

const User_API_BASE_URL = "http://localhost:5000/api/v1/Users";

class UserService {

    getUsers() {
        return axios.get(User_API_BASE_URL);
    }

    createUser(User) {
        return axios.post(User_API_BASE_URL, User);
    }

    updateUser(User, UserId) {
        return axios.put(User_API_BASE_URL + '/' + UserId, User);
    }

    deleteUser(UserId) {
        return axios.delete(User_API_BASE_URL + '/' + UserId);
    }
}

export default new UserService()