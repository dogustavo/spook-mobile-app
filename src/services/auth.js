import Http from '../utils/http';

export const requestLogin = data => {
    return new Promise((resolve, reject) => {
        Http.post('/user/auth', data)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
