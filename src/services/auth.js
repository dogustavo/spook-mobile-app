/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import Http from '../utils/http';

export const requestLogin = data => {
<<<<<<< HEAD
=======
    console.log(data);
>>>>>>> d130654a4614e4e571c5889dbaff04a6d847e88a
    return new Promise((resolve, reject) => {
        Http.post('/user/auth', data)
            .then(res => {
                console.log('teste', res);
                resolve(res.data);
            })
            .catch((err) => {
                console.log('error');
                reject(err);
            });
    });
};
