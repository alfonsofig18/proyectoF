import React, { useEffect, useRef, useState } from 'react';
// import { supabase } from '../../supabase/Supabase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../features/user/userSlice';
import axios from 'axios';

const useAuthStateChange = () => {
    // const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const userState = useSelector((state) => state.user);
    const first = useRef(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const main = async () => {
            if (localStorage.getItem('user')) {
                await setIsAuthenticated(true);
                const local = JSON.parse(localStorage.getItem('user'));
                await setUserData(local);
            } else {
                await setIsAuthenticated(false);
            }
        }
        main();
        // console.log(userState);
        // axios({
        //     method: 'GET',
        //     url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/byUserLoged`,
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('AU2')}`
        //     },
        // })
        //     .then((res) => {
        //         console.log(res);
        //         setIsAuthenticated(true);
        //         if (res.data) {
        //             setUserData(res.data);
        //         }
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         setIsAuthenticated(false);
        //         if (err.response) {
        //             dispatch(clearUser());
        //             // localStorage.removeItem('AU2');
        //             // navigate('/signIn', { replace: true });
        //         }
        //     })

    }, []);

    useEffect(() => {
        if (first.current === 0) {
            first.current++
            console.log('Primer render sin Userdata');
            return;
        }
        dispatch(setUser({ ...userData }))
    }, [userData])

    return isAuthenticated;
}

const useAuthStateChangeSignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Holas');
        // const result = supabase.auth.onAuthStateChange((event, session) => {
        //     if (session) {
        //         navigate('/');
        //     }
        // })
    }, []);
}

const IndexRoute = (route) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === route || location.pathname === `${route}/`) {
            // sessionStorage.setItem('route', route);
            navigate(`${route}/index`);
        }
    }, [location.pathname, navigate]);
}

export { useAuthStateChange, useAuthStateChangeSignIn, IndexRoute };
