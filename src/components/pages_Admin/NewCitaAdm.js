import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as dayjs from 'dayjs'
// import { supabase } from '../supabase/Supabase';

const NewCitaAdm = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [estudiantes, setEstudiantes] = useState([]);
    // const [nuevaCita, setNuevaCita] = useState({
    //     estudiante_id: null,
    //     psicologo_id: 20,
    //     fecha_cita: null,
    //     duracion_minutos: null,
    //     estado_id: null,
    //     notas: null,
    //     fecha_creacion: null,
    //     fecha_actualizacion: null
    // });
    const [estudiante, setEstudiante] = useState('');
    const [fechaAgendacion, setFechaAgendacion] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [notas, setNotas] = useState('');
    const selectEstudiantes = useRef();
    const navigate = useNavigate();
    // const userLocalS = JSON.parse(localStorage.getItem('datuser'));

    // const handleChange = (e) => {
    //     const { value, name } = e.target;
    //     setNuevaCita((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }))
    //     console.log(nuevaCita);
    // }

    const handleSubmit = (e) => {
        const alertSubmit = toast.loading('Cargando...', {
            position: 'top-right',
            style: {
                fontWeight: '500',
                borderRadius: '12px',
            }
        })
        e.preventDefault();
        if (estudiante === '') {
            toast.error('Debes seleccionar un estudiante', {
                id: alertSubmit,
                duration: 5000,
            })
            return;
        }
        axios({
            method: 'POST',
            url: 'http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/citas/add/byUserLoged',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AU2')}`,
            },
            data: {
                "estudiante_id": estudiante,
                "fecha_cita": dayjs(fechaAgendacion).format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT',
                "duracion_minutos": 0,
                "estado_id": 1,
                "notas": notas,
                "fecha_creacion": fechaCreacion,
                "fecha_actualizacion": fechaCreacion
            }
        })
            .then((res) => {
                console.log(res)
                if (res.data) {
                    toast.success('Cita creada con éxito', {
                        id: alertSubmit,
                        duration: 5000,
                    });
                    setTimeout(() => {
                        navigate('/citasAdm/estadoDeCitasAdm', { replace: true })
                    }, 2000);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(`Ha ocurrido un error\n ${err.message}`, {
                    id: alertSubmit,
                    duration: 5000,
                })
            })
    }

    useEffect(() => {
        const fechaActual = dayjs().toDate().toUTCString();
        setFechaCreacion(fechaActual);
        selectEstudiantes.current.disabled = true;
        const toastAllUsers = toast.loading('Obteniendo datos...', {
            position: 'top-right',
            style: {
                fontWeight: '500',
                borderRadius: '12px',
            }
        });
        // setUser(userLocalS);
        axios({
            url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AU2')}`,
            },
        }).then((res) => {
            setAllUsers(res.data)
            console.log(res.data);
            selectEstudiantes.current.disabled = false;
            toast.success('Información obtenida con éxito', {
                id: toastAllUsers,
                duration: 5000,
            })
        })
            .catch((err) => {
                console.log(err)
                toast.error(`Ha ocurrido un error al traer la información \n ${err.message}`, {
                    id: toastAllUsers,
                    duration: 5000,
                })

            })
    }, [])

    useEffect(() => {
        setEstudiantes(allUsers.filter((estudiante) => estudiante.rol_id === 2));
    }, [allUsers])

    return (
        <>
            <div className="row">
                <div className="col-md-12 offset-lg-1 col-lg-10">
                    <div className="position-relative">
                        <h1 className='font-s-title'>
                            Solicitud de cita
                        </h1>
                        <p className="mb-3 lead font-s-p w-lg-75">
                            Usa el siguiente formulario para hacer una solicitud de cita a tu psicólogo
                        </p>
                        <div className="width-7x pt-1 bg-primary mb-4"></div>
                        <form onSubmit={handleSubmit} className="needs-validation mb-5 mb-lg-7">
                            <div className="row">
                                <div className="col-sm-4 mb-2">
                                    <label className="form-label" htmlFor="name">Estuante</label>
                                    <select ref={selectEstudiantes} value={estudiante} onChange={(e) => setEstudiante(e.target.value)} className="form-select form-select mb-3" aria-label=".form-select-lg example">
                                        <option value="">Estudiante</option>
                                        {estudiantes.map((estudiante) => { return (<option key={estudiante.usuario_id} value={estudiante.usuario_id}>{estudiante.nombre} {estudiante.apellidos}</option>) })}
                                    </select>
                                </div>
                                <div className="col-sm-4 mb-2">
                                    <label className="form-label" htmlFor="name">Fecha agendación de cita</label>
                                    <input type="text" name="fecha_cita" className="form-control"
                                        placeholder="MM/DD/AAAA" value={fechaAgendacion} onChange={(e) => setFechaAgendacion(e.target.value)} required />
                                </div>
                                <div className="col-sm-4 mb-2">
                                    <label className="form-label" htmlFor="name">Fecha de creación</label>
                                    <input type="text" value={fechaCreacion} name="fecha_creacion" className="form-control" style={{ opacity: 0.45 }} readOnly required />
                                </div>

                            </div>

                            <div className="input-icon-group input-icon-group-lg mb-3">
                                <span className="input-icon">
                                    <i className='bx bx-message-square-detail' ></i>
                                </span>
                                <textarea rows="2" className="form-control form-control-lg"
                                    placeholder="Notas..." name='notas' required onChange={(e) => setNotas(e.target.value)}></textarea>
                            </div>

                            <div className="d-md-flex justify-content-between align-items-center">
                                <p className="small mb-4 text-body-secondary mb-md-0">La cita quedará con estado asignada de forma inmediata.</p>
                                <button type='submit' className='btn btn-md btn-primary' name='submit'><i class="bi bi-calendar-plus-fill" style={{ fontSize: '85%' }}></i> Asignar cita</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewCitaAdm;