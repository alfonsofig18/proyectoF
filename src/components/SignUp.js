import React, { useState } from 'react';
import Spinner from './hooks/useSpinner';
import { useAuthStateChangeSignIn } from './hooks/onAuthStateChange';
import FooterInnovacion from './FooterInnovacion';
import { Toaster, toast } from 'react-hot-toast';
// import { supabase } from '../supabase/Supabase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    // useAuthStateChangeSignIn();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signIn', { replace: true });
    }

    const NewSignUp = async (e) => {
        e.preventDefault();
        const button = e.nativeEvent.submitter;
        button.disabled = true;

        if (password === confirmPassword) {

            axios({
                method: 'POST',
                url: 'http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/add',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "rol_id": 2,
                    "nombre": name,
                    "apellidos": lastname,
                    "nombre_usuario": userName,
                    "correo_electronico": email,
                    "hash_contrasena": password,
                    "activo": true,
                    "ultima_conexion": null
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.data) {
                        toast(`Hola: ${name}.\nTu registro fue éxitoso. Puedes iniciar sesión`, {
                            icon: '🌲',
                        });
                        setTimeout(() => {
                            navigateSignIn();
                        }, 3000);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    if (err.response) {
                        toast(`Hubo un error: ${err.response.data.message}\n Código: ${err.response.status}`, {
                            icon: '⛔',
                        });
                        button.disabled = false;
                    }
                });
        } else {
            toast(`Contraseña y confirmar contraseña deben ser iguales`, {
                icon: '❌',
            });
            button.disabled = false;

        }
    }
    const [spinner] = Spinner(1500)

    return (
        <>
            <Toaster position="top-center"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 3000,
                    style: {
                        borderRadius: '50px',
                        'font-weight': '500',
                        // padding: 0,
                    }
                }} />
            {spinner &&
                <div className="spinner-loader bg-primary text-white">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            }
            <main>
                <section className="position-relative">
                    <div className="bg-pattern text-primary text-opacity-50 opacity-25 w-100 h-100 start-0 top-0 position-absolute"></div>
                    <div className="bg-gradientwhite flip-y w-50 h-100 start-50 top-0 translate-middle-x position-absolute"></div>
                    <div className="container pt-11 pt-lg-14 pb-9 pb-lg-11 position-relative z-1">
                        <div className="row align-items-center justify-content-center">
                            <div className=" col-xl-4 col-lg-5 col-md-6 col-sm-8 z-2">

                                <h2 className="mb-1 display-6">
                                    👋¡Hola!
                                </h2>
                                <p className="mb-4 text-body-secondary">
                                    Para empezar, ingresa tus credenciales para el registro...
                                </p>
                                <div className="position-relative">
                                    <form className="needs-validation" onSubmit={NewSignUp}>
                                        <div className='row position-relative'>
                                            <div className="col-lg-6 col-md-12 col-sm-12 z-2">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bx-user"></i>
                                                    </span>
                                                    <input type="text" className="form-control" required autoFocus placeholder="Nombre(s)" value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 z-2">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i class='bx bxs-user'></i>
                                                    </span>
                                                    <input type="text" className="form-control" required placeholder="Apellido(s)" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 z-2">
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className='bx bxs-user-badge'></i>
                                                </span>
                                                <input type="text" className="form-control" required placeholder="Nombre de usuario" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 z-2">
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className="bx bx-envelope"></i>
                                                </span>
                                                <input type="email" className="form-control" required
                                                    placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 z-2">
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className="bx bx-lock-open"></i>
                                                </span>
                                                <input type="password" className="form-control" required
                                                    placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 z-2">
                                            <div className="input-icon-group mb-3">
                                                <span className="input-icon">
                                                    <i className="bx bx-lock-open"></i>
                                                </span>
                                                <input type="password" className="form-control" required
                                                    placeholder="Confirmar contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 z-2">
                                            <div className="mb-3 d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" required type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label className="form-check-label small text-body-secondary" htmlFor='flexCheckDefault'>
                                                        Acepto los <a href="#!" className="fw-semibold link-decoration">Terminos & condiciones</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-primary" type="submit">
                                                Registrarme
                                            </button>
                                        </div>
                                    </form>

                                    <p className="pt-3 small text-body-tertiary">
                                        Ya tienes cuenta?
                                        <a className="ms-2 fw-semibold link-underline" style={{ cursor: 'pointer' }} onClick={navigateSignIn}>Iniciar Sesión</a>
                                    </p>
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

export default SignUp;