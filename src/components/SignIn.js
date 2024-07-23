import React, { useEffect, useRef, useState } from 'react';
import Spinner from './hooks/useSpinner';
import FooterInnovacion from './FooterInnovacion';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { setUser } from './features/user/userSlice';
import { userContextRedux } from './features/user/thunks';
import { useDispatch, useSelector } from "react-redux";

// import { useAuthStateChangeSignIn } from './hooks/onAuthStateChange';

const SignIn = () => {
    // useAuthStateChangeSignIn();
    const reduxUser = useSelector((state) => state.user)
    const [userLogin, setUserLogin] = useState({
        user: '',
        password: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const InpPassword = useRef();
    const navigateSignUp = () => navigate('/signUp');

    useEffect(() => {
        setTimeout(() => {
            toast.dismiss()
        }, 1300);
    }, [])

    useEffect(() => {
        getUserFromToken();
    }, [reduxUser])

    const getUserFromToken = async () => {
        if (reduxUser.rol_id === 2) {
            setTimeout(() => {
                navigate('/home', { replace: true })
            }, 3000);
        } else if (reduxUser.rol_id === 1) {
            setTimeout(() => {
                navigate('/homeAdm', { replace: true })
            }, 3000);
        }
    }

    const NewSignIn = async (e) => {
        e.preventDefault();
        const userLoginToast = toast.loading('Comprobando información...');
        const button = e.nativeEvent.submitter;
        button.disabled = true;
        axios({
            method: 'POST',
            url: 'http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/login',
            headers: { 'Content-Type': 'application/json' },
            data: {
                user: userLogin.user,
                password: userLogin.password,
            }
        })
            .then(async (res) => {
                console.log(res);
                if (res.statusText === 'OK') {
                    toast.success('Appse', {
                        description: `🌲 Bienvenido ${userLogin.user}`,
                        id: userLoginToast
                    });
                    localStorage.setItem('AU2', res.data.access_token);
                    dispatch(userContextRedux());
                    // getUserFromToken();
                }

            })
            .catch((err) => {
                console.error(err);
                if (err.response) {
                    toast.error(`Appse`,{
                        description: `Ha ocurrido un error, ${err.response.data.message}\n código error ${err.response.status}`,
                        id: userLoginToast
                    });
                    button.disabled = false;
                    InpPassword.current.focus();
                }
            })
    }

    const [spinner] = Spinner(1500);

    return (
        <>
            <Toaster
                position="top-right"
                richColors='true'
                duration={6500}
                toastOptions={{
                    style: {
                        fontWeight: '500',
                        padding: '15px'
                    }
                }}
            />
            {spinner && (
                <div className="spinner-loader bg-primary text-white">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            )}
            {/* {errores &&
                (
                    <p>{errores}</p>
                )
            } */}
            <main className='main-login'>
                <section className="position-relative">
                    <div className="bg-pattern text-primary text-opacity-50 opacity-25 w-100 h-100 start-0 top-0 position-absolute"></div>
                    <div className="container pt-11 pt-lg-14 pb-9 pb-lg-11 position-relative z-1">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 z-2">
                                <h2 className="signIn-hola mb-0">
                                    👋Hola
                                </h2>
                                <h2 className="mb-1 h2">
                                    ¡Bienvenido a Appse!
                                </h2>
                                <p className="mb-3 text-body-secondary">
                                    Ingresa tus credenciales para iniciar sesión aquí ...
                                </p>
                                <div className="position-relative">
                                    <div>
                                        <form className="needs-validation" onSubmit={NewSignIn}>
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className="bx bx-user"></i>
                                                </span>
                                                <input type="text" className="form-control" required autoFocus placeholder="Usuario" value={userLogin.user} onChange={(e) => setUserLogin((prevUser) => ({ ...prevUser, user: e.target.value }))} />
                                            </div>
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className="bx bx-lock-open"></i>
                                                </span>
                                                <input type="password" className="form-control" required placeholder="Contraseña" ref={InpPassword} value={userLogin.password} onChange={(e) => setUserLogin((prevUser) => ({ ...prevUser, password: e.target.value }))} />
                                            </div>
                                            <div className="mb-3 d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Recuerdame
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="text-end d-block small mb-0"><a href="page-account-forget-password.html" className="link-decoration">Olvidaste tu contraseña?</a></label>
                                                </div>
                                            </div>

                                            <div className="d-grid">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="bi bi-check-circle-fill"></i> Ingresar
                                                </button>
                                            </div>
                                        </form>

                                        <p className="pt-4 small text-body-secondary">¿No tienes cuenta?
                                            <a className="ms-2 fw-semibold link-underline" style={{ cursor: 'pointer' }} onClick={navigateSignUp}>
                                                Registrarme
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterInnovacion></FooterInnovacion>
        </>
    );
}

export default SignIn;