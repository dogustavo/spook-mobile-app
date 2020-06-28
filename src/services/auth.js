import Http from '../utils/http';

export const requestLogin = data => {
    return new Promise((resolve, reject) => {
        Http.post('/user/auth', data)
            .then(res => {
                console.log('teste', res)
                resolve(res.data);
            })
            .catch((err) => {
                console.log('error')
                reject(err)
            })
    })
}