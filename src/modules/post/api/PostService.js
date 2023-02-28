import axios from "axios";

export class PostService {
    static async getPostById(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    static async getPostComments(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }

    static async getPostAuthor(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}