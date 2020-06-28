import Http from '../utils/http';

export const createUser = data => {
    return new Promise((resolve, reject) => {
        Http.post('/user/create', data)
            .then(res => {
                console.log('sucesso', res)
                resolve(res.data);
            })
            .catch((err) => {
                console.log('erro', err);
                
                reject(err);
            });
    });
};
