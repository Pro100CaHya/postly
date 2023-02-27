import axios from "axios";

export class PostsService {
    static async getAll(_limit = 10, _page = 1) {
        return axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _page,
                _limit,
            }
        });
    }
}