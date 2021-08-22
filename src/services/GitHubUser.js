var axios = require('axios');
class GitHubUserService {

    getByUsername(username) {
        return axios.get('https://api.github.com/users/' + username);
    }

    getReposByUsername(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
}

export default new GitHubUserService();