import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './hooks/useSpinner';
import { UserContext } from './context/UserContext';
import { Link } from 'react-router-dom';

const PageLogOut = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const SignInPage = () => navigate('/signIn');
    const [spinner] = Spinner(1000)
    return (
        <>
            {spinner &&
                <div className="spinner-loader bg-primary text-white">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            }
            <main className="main-content" id="main-content">
                <section className="position-relative">
                    <div className="container pt-14 pb-9 pb-lg-11">
                        <div className="row pt-lg-7 justify-content-center text-center">
                            <div className="col-xl-8">
                                <div className="width-10x height-10x rounded-circle position-relative bg-success text-white flex-center mb-4">
                                    <i className="bx bx-check lh-1 display-4 fw-normal"></i>
                                </div>
                                <h1 className="display-2 mb-3">
                                    Has cerrado sesión con éxito
                                </h1>
                                <p className="mb-5 lead mx-auto">
                                    Ahora toda tu información se encuentra a salvo. Esperamos verte en una próxima ocasión. <b>Appse</b>
                                </p>
                                <Link className='btn btn-outline-primary btn-lg px-4 px-lg-5' to={'/signIn'} reloadDocument>Iniciar Sesión</Link>
                                {/* <a className="btn btn-outline-primary btn-lg px-4 px-lg-5" style={{ cursor: 'pointer' }} onClick={SignInPage}>
                                    Iniciar Sesión </a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default PageLogOut;