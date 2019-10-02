import axios from 'axios'

const config = {
    api: 'https://reqres.in/api/users?page=1'
}

const getUser = axios.get(config.api);
export { getUser };