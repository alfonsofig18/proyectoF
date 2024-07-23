import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
// import { supabase } from '../supabase/Supabase';
import img12 from '../theme/assets/img/avatar/12.jpg';
// import logo from '../theme/assets/img/logo/Appse.png';
import logo from '../theme/assets/img/logo/Appse.svg';


const Header = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('Cargando...');
    const [name, setName] = useState('Cargando...');
    const [lastName, setlastName] = useState('Cargando...');

    // useEffect(() => {
    //     const result = supabase.auth.onAuthStateChange((event, session) => {
    //         if (session) {
    //             console.log(session);
    //             setEmail(session.user.user_metadata.email);
    //             setName(session.user.user_metadata.first_name);
    //             setlastName(session.user.user_metadata.last_name);
    //             sessionStorage.setItem('nameOnSesion', session.user.user_metadata.first_name)
    //         }
    //     })
    // }, []);

    // const LogOut = async () => {
    //     try {
    //         let { error } = await supabase.auth.signOut()
    //         if (error) {
    //             toast(`Hubo un error ${error.message}\n código error: ${error.status}`, {
    //                 icon: '⛔',
    //             });
    //         } else {
    //             // navigate('/logOut');
    //             navigate('/logOut');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }

    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 4000,
                    style: {
                        borderRadius: '50px',
                        'font-weight': '500',
                        // padding: 0,
                    }
                }} />
            <header className="z-fixed header-transparent header-absolute-top pt-lg-3">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container position-relative">

                        <a className="navbar-brand" href="index.html">
                            <img src={logo} alt="" className="img-fluid navbar-brand-light" />
                            <img src={logo} alt="" className="img-fluid navbar-brand-dark" />
                        </a>

                        <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
                            <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse"
                                data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <i></i>
                                </span>
                            </button>
                            <div className="nav-item me-3 me-lg-0 dropdown">

                                <a href="#" className="btn btn-outline-primary dropdown-toggle rounded-pill py-0 ps-0 pe-2"
                                    data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                    <img src={img12} alt="" className="avatar sm rounded-circle me-1" />
                                    <small>{name[0]}{lastName[0]}</small>
                                    <i className='bx bxs-chevron-down ms-2' ></i>
                                </a>

                                <div className="dropdown-menu shadow-lg dropdown-menu-end dropdown-menu-xs p-0">
                                    <a href="#!" className="dropdown-header border-bottom p-4">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img src={img12} alt="" className="avatar xl rounded-pill me-3" />
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-body">{name} {lastName}</h5>
                                                <span className="d-block mb-2 text-lowercase">{email}</span>
                                                <div className="small d-inline-block link-underline fw-semibold">Ver cuenta</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item rounded-top-0 p-3" style={{ cursor: 'pointer' }} >
                                        <span className="d-block text-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                className="bx bx-box-arrow-right me-2" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                <path fillRule="evenodd"
                                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                            </svg>
                                            Cerrar sesión
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="mainNavbarTheme">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className={"nav-link"} to={`/`}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={"nav-link"} to={`/nuevaCita`}>Citas</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs- toggle="dropdown">Dropdown Nav</a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">Dropdown item</a>
                                    <a href="#" className="dropdown-item">Dropdown item</a>
                                    <a href="#" className="dropdown-item">Dropdown item</a>
                                    <a href="#" className="dropdown-item">Dropdown item</a>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;