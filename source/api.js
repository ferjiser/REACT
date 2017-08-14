import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3002';

const api = {
    posts: {
        async getList(page = 1) {
            const response = await fetch(`${baseUrl}/posts?_page=${page}`);
            const data = await response.json();
            return data;
        },
        async getSingle(id = 1) {
            const response = await fetch(`${baseUrl}/posts/${id}`);
            const data = await response.json();
            return data;
        },
        async getComments(id = 1) {
            const response = await fetch(`${baseUrl}/posts/${id}/comments`);
            const data = await response.json();
            return data;
        }
    },
    users: {
        async getSingle(id = 1) {
            const response = await fetch(`${baseUrl}/users/${id}`);
            const data = await response.json();
            return data;
        }
    }
}

export default api;