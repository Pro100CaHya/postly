import axios from "axios";

export class UsersService {
    static async getAll(_limit, _page) {
        return axios.get("https://jsonplaceholder.typicode.com/users", {
            params: {
                _page,
                _limit,
            }
        });
    }
}