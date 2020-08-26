import axios from './Axios';

class ProfileServices {
    constructor(axios) {
        this.$axios = axios;
    }

    /**
     * Fetch Profiles list
     *
     * @return {Promise<array>}
     */
    fetchProfilesList() {
        return new Promise((resolve, reject) => {
            this.$axios.get('/data/db.json').then(({ data }) => {
                resolve(data);
            }).catch(reject)
        });
    }
}


export default new ProfileServices(axios);
