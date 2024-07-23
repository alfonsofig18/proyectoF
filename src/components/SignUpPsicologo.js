import React, { useRef, useState } from 'react';
// import { supabase } from '../supabase/Supabase';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Spinner from './hooks/useSpinner';
import FooterInnovacion from './FooterInnovacion';
import axios from 'axios';

const SignUpPsicologo = () => {
    const navigate = useNavigate();
    const [confirmPassword, setconfirmPassword] = useState('');
    const [userPsicologo, setUserPsicologo] = useState({
        rol_id: 1,
        nombre: '',
        apellidos: '',
        nombre_usuario: '',
        correo_electronico: '',
        hash_contrasena: '',
        activo: true,
        ultima_conexion: null
    });
    const btnSubmit = useRef();

    const navigateSignIn = () => {
        navigate('/signIn', { replace: true });
    }

    const handleInputChange = (campo, e) => {
        const { value } = e.target
        switch (campo) {
            case 'nombre':
                setUserPsicologo((prevUserPsicologo) => ({ ...prevUserPsicologo, nombre: value }));
                break;
            case 'apellidos':
                setUserPsicologo((prevUserPsicologo) => ({ ...prevUserPsicologo, apellidos: value }));
                break;
            case 'nombre_usuario':
                setUserPsicologo((prevUserPsicologo) => ({ ...prevUserPsicologo, nombre_usuario: value }));
                break;
            case 'correo_electronico':
                setUserPsicologo((prevUserPsicologo) => ({ ...prevUserPsicologo, correo_electronico: value }))
                break;
            case 'hash_contrasena':
                setUserPsicologo((prevUserPsicologo) => ({ ...prevUserPsicologo, hash_contrasena: value }))
                break;
            default:
                break;
        }
    }

    const NewSignUp = async (e) => {
        e.preventDefault();
        btnSubmit.current.disabled = true;
        if (userPsicologo.hash_contrasena === confirmPassword) {

            axios({
                method: 'POST',
                url: 'http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/add',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    ...userPsicologo
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.data) {
                        toast(`Hola: ${userPsicologo.nombre}.\nTu registro ha sido éxitoso. Puedes iniciar sesión`, {
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
                        btnSubmit.disabled = false;
                    }
                });

            // try {
            //     let { data, error } = await supabase.auth.signUp({
            //         email: userPsicologo.email,
            //         password: userPsicologo.password,
            //         options: {
            //             data: {
            //                 first_name: userPsicologo.name,
            //                 last_name: userPsicologo.lastName,
            //                 user_name: userPsicologo.userName,
            //                 role: 1,
            //             }
            //         },
            //     })
            //     if (data) {
            //         toast(`Hola: ${data.user.user_metadata.first_name}.\nActiva tu cuenta en tu e-mail`, {
            //             icon: '🌲',
            //         });
            //         setTimeout(() => {
            //             navigate('/home', { replace: true });
            //         }, 4000);
            //     } else if (error) {
            //         toast(`Hubo un error:\n ${error.message}`, {
            //             icon: '⛔',
            //         });
            //         btnSubmit.current.disabled = false;
            //         console.log(`Hubo un error ${error}`);
            //     }
            // } catch (error) {
            //     console.error(`Hubo un error: ${error}`);
            // }
        } else {
            toast(`Contraseña y confirmar contraseña deben ser iguales`, {
                icon: '❌',
            });
            setTimeout(() => {
                btnSubmit.current.disabled = false;
            }, 1500);
        }
    }

    const [spinner] = Spinner(1500);
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
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bx-user"></i>
                                                    </span>
                                                    <input type="text" className="form-control" required autoFocus placeholder="Nombre(s)" value={userPsicologo.nombre} onChange={(e) => handleInputChange('nombre', e)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className='bx bxs-user'></i>
                                                    </span>
                                                    <input type="text" className="form-control" required placeholder="Apellido(s)" value={userPsicologo.apellidos} onChange={(e) => handleInputChange('apellidos', e)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bxs-user-badge"></i>
                                                    </span>
                                                    <input type="text" className="form-control" required
                                                        placeholder="Nombre de usuario" value={userPsicologo.nombre_usuario} onChange={(e) => handleInputChange('nombre_usuario', e)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bx-envelope"></i>
                                                    </span>
                                                    <input type="email" className="form-control" required
                                                        placeholder="Correo electrónico" value={userPsicologo.correo_electronico} onChange={(e) => handleInputChange('correo_electronico', e)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bx-lock-open"></i>
                                                    </span>
                                                    <input type="password" className="form-control" required
                                                        placeholder="Contraseña" value={userPsicologo.hash_contrasena} onChange={(e) => handleInputChange('hash_contrasena', e)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="input-icon-group mb-3">
                                                    <span className="input-icon">
                                                        <i className="bx bx-lock-open"></i>
                                                    </span>
                                                    <input type="password" className="form-control" required
                                                        placeholder="Confirmar contraseña" onChange={(e) => setconfirmPassword(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3 d-flex justify-content-between">
                                            <div className="form-check">
                                                <input className="form-check-input" required type="checkbox" value=""
                                                    id="flexCheckDefault" />
                                                <label className="form-check-label small text-body-secondary" htmlFor='flexCheckDefault'>
                                                    Acepto los <a href="#" className="fw-semibold link-decoration">Terminos & condiciones</a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-primary" type="submit" ref={btnSubmit}>
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
            <FooterInnovacion />
        </>
    );
}

export default SignUpPsicologo;