import axios from '../api/axios';
import { Auth, AuthState } from '../context/AuthProvider';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth() as any

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth((prev:Auth) => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;