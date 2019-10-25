import axios from 'axios';

class authService {

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            //TODO: check http status codes and do proper action
            throw err;
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        //TODO: validate token / expirity
        if (access_token) {
            this.setSession(access_token);
        }
    };

    setSession = access_token => {
        if (access_token) {
            localStorage.setItem('jwt_access_token', access_token);  // eslint-disable-line no-undef
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else {
            localStorage.removeItem('jwt_access_token');  // eslint-disable-line no-undef
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    getAccessToken = () => {
        return localStorage.getItem('jwt_access_token');  // eslint-disable-line no-undef
    };

    init() {
        this.setInterceptors();
        this.handleAuthentication();
    }
}

export default new authService();
