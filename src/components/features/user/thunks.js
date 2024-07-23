import { Await } from "react-router-dom";
import { setAuthFalse, setAuthTrue, clearUser, setUser } from "./userSlice";
import axios from "axios";

export const userContextRedux = () => {
    return async (dispatch, getState) => {
        axios({
            method: 'GET',
            url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/byUserLoged`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('AU2')}`
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data) {
                    const { data } = res;
                    dispatch(setAuthTrue());
                    dispatch(setUser({ ...data }));
                    // console.log(data);
                }
            })
            .catch((err) => {
                console.error(err);
                if (err.response) {
                    dispatch(setAuthFalse());
                    dispatch(clearUser());
                    if (localStorage.getItem('AU2')) {
                        localStorage.removeItem('AU2');
                    }
                }
            })
    }
}

// export const isAuth = () => {
//     if (localStorage.getItem('AU2')) {
//         return async (dispatch, getState) => {
//             axios({
//                 method: 'GET',
//                 url: 'http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/byUserLoged',
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('AU2')}`
//                 },
//             })
//                 .then((res) => {
//                     // console.log(res)
//                     return res.data;
//                 })
//                 .catch((err) => {
//                     // console.error(err);
//                     return null;
//                 })
//         }
//     }
// }