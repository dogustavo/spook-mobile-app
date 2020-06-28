import Http from '../utils/http';

export const createUser = data => {
    return new Promise((resolve, reject) => {
        Http.post('/user/create', data)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {                
                reject(err);
            });
    });
};
