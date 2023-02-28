import axios from "axios";

export class UserService {
    static async getUser(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    }

    static async getUserPosts(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    }
}