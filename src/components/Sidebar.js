import React, { useState, useContext, useEffect } from 'react';
import img12 from '../theme/assets/img/avatar/12.jpg';
import { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from './features/user/userSlice';

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeToggle, setActiveToggle] = useState(false);
    const [activeToggleIcon, setActiveToggleIcon] = useState('');
    const [toggleClassSidebar, setToggleClassSidebar] = useState('close');

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user)

    useEffect(() => {
        console.log('Holas sidebar');
    }, [])

    const SidebarScroll = (event) => event.stopPropagation();

    const ToggleSideBar = () => {
        if (!activeToggle) {
            setActiveToggle(true);
            setToggleClassSidebar('open');
            setActiveToggleIcon('bx-rotate-270');
        } else {
            setActiveToggle(false);
            setToggleClassSidebar('close')
            setActiveToggleIcon('');
        }
    };

    const handleMouseEnter = () => {
        if (!activeToggle) {
            setActiveToggle(true);
            setToggleClassSidebar('open');
            // setTimeout(() => {
            // }, 400);
        }
    };

    const handleMouseLeave = () => {
        if (activeToggle) {
            setActiveToggle(false);
            setToggleClassSidebar('close');
        }
    };

    const LogOut = () => {
        dispatch(clearUser());
        localStorage.removeItem('user');
        localStorage.removeItem('AU2');
        navigate('/logOut', { replace: true });
    }

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
            <nav className={'sidebar shadow-lg ' + toggleClassSidebar} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <header>
                    <div className='image-text'>
                        <span className='image'>
                            <img className='rounded-5' src={img12} alt="" />
                        </span>
                        <div className='text header-text'>
                            <span className='name ellipsis-1line'>{userState.nombre} {userState.apellidos}</span>
                            <span className='email ellipsis-1line'>{userState.correo_electronico}</span>
                            {/* <span className='rol'>Administrador</span> */}
                        </div>
                    </div>
                    <i className={'bx bxs-chevron-right toggle ' + activeToggleIcon} onClick={ToggleSideBar}></i>
                </header>
                <div className="menu-bar" onWheel={(event) => SidebarScroll(event)}>
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link-side">
                                <NavLink to={'/home'} reloadDocument>
                                    <i className='bx bx-home-heart icons'></i>
                                    <span className="text nav-text">Inicio</span>
                                </NavLink>
                            </li>
                            <li className="nav-link-side">
                                <NavLink to={'/emergencia'} reloadDocument>
                                    <i className='bx bxs-traffic-barrier icons'></i>
                                    <span className="text nav-text">Emergencia</span>
                                </NavLink>
                            </li>
                            <li className="nav-link-side">
                                <NavLink to={'/citas'} reloadDocument>
                                    <i className='bx bx-calendar-event icons'></i>
                                    <span className="text nav-text">Mis citas</span>
                                </NavLink>
                            </li>
                            <li className="nav-link-side">
                                <NavLink to={'/casos'} reloadDocument>
                                    <i className='bx bx-book-reader icons'></i>
                                    <span className="text nav-text">Mis casos</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <div className='border-top' style={{ width: '100%', height: '0.3rem' }}>
                        </div>
                        <li className="nav-link-side">
                            <a href="#">
                                <i className='bx bxs-cog icons'></i>
                                <span className="text nav-text">Configuración</span>
                            </a>
                        </li>
                        <li className="nav-link-side">
                            <a href='#' onClick={LogOut}>
                                <i className='bx bxs-log-out icons'></i>
                                <span className="text nav-text">Cerrar sesión</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;