import Http from '../utils/http';

export const createUser = async data => {
    return await new Promise((resolve, reject) => {
        Http.post('/user/create', data)
            .then(res => {
                console.log(res)
                // resolve(res.data);
            })
            .catch((err) => {
                console.log('erro', err);
                
                // reject(err);
            });
    });
};
