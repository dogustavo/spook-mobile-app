/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import Http from '../utils/http';

export const createUser = async data => {
    return await new Promise((resolve, reject) => {
        Http.post('/user/create', data)
            .then(res => {
                resolve(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
};
