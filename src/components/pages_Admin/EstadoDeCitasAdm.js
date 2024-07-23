import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
// import { UserContext } from './context/UserContext';
// import { Toaster, toast } from 'react-hot-toast';
import { Toaster, toast } from 'sonner';
import Modal from 'react-bootstrap/Modal';

// import { useSelector } from 'react-redux';
import axios from 'axios';

const EstadoDeCitasAdm = () => {
    // const { arrays } = useContext(UserContext);
    // const user = useSelector((state) => state.user)


    const [citas, setCitas] = useState([]);
    const [sortedCitas, setSortedCitas] = useState([])
    const firstRender = useRef(0);

    useEffect(() => {
        const toastCitas = toast.loading('Cargando...');
        axios({
            url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/citas/find_by_psicologo`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AU2')}`,
            },
        }).then((res) => {
            console.log(res);
            if (res.data) {
                if (res.data.length !== 0) {
                    setCitas(res.data);
                    toast.success('Appse', {
                        description: 'Información encontrada con éxito',
                        id: toastCitas,
                        important: true,
                    })
                } else {
                    toast.info('Ups!', {
                        description: 'Actualmente no cuentas con alguna cita creada',
                        id: toastCitas,
                    })
                }
            }
        })
            .catch((err) => {
                console.error(err)
                toast.error(`Ha ocurrido un error`, {
                    description: `${err.message}`,
                    id: toastCitas,
                })
            })
    }, [])

    // useEffect(() => {
    //     if (firstRender.current === 0) {
    //         firstRender.current++;
    //         return;
    //     }
    //     if (citas) {
    //         setSortedCitas(citas.slice().sort((first, second) => {
    //             if (first.estado_id > second.estado_id) {
    //                 return 1;
    //             } else {
    //                 return -1;
    //             }
    //         }))
    //     }
    //     console.log(sortedCitas);
    // }, [citas])

    const cancelarCita = (idCita) => {
        const updateCita = toast.loading('Cargando...');
        axios({
            method: 'PATCH',
            url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/citas/update/${idCita}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AU2')}`,
            },
            data: {
                "estado_id": 3,
            }
        })
            .then((res) => {
                if (res.data) {
                    toast.success('Appse', {
                        description: 'Cita cancelada con éxito',
                        id: updateCita,
                    })
                }
            })
            .catch((err) => {
                toast.error(`Ha ocurrido un error`, {
                    description: `${err.message}`,
                    id: updateCita,
                })
            })
    }

    const [modalCitaId, setModalCitaId] = useState(null);

    const handleShow = (citaId) => {
        setModalCitaId(citaId);
    };

    const handleClose = () => {
        setModalCitaId(null);
    };

    return (
        <>
            <Toaster
                position="top-right"
                richColors='true'
                duration={6500}
                toastOptions={{
                    style: {
                        fontWeight: '500',
                    }
                }}
            />
            <div className='row'>
                {citas && citas.map((cita) => {
                    return (
                        <>
                            <React.Fragment key={cita.cita_id}>
                                <div className="col-xs-12 col-md-6 col-lg-3">
                                    <DivEstadoCita estado={cita.estado_id} className='mb-4' onClick={() => handleShow(cita.cita_id)}>
                                        <span className='estado'>{cita.estado_id}</span>
                                        <BloqueInfoFlex>
                                            <div className='border-bottom'>
                                                <span className='titles'>Estudiante</span>
                                                <span>{cita.estudiante_id}</span>
                                            </div>
                                            {/* <div className='border-bottom'>
                                    <span className='titles'>Fecha de creación</span>
                                    <span>{cita.fecha_crea}</span>
                                </div> */}
                                            <div className='border-bottom'>
                                                <span className='titles'>Fecha de creación</span>
                                                <span>{cita.fecha_creacion}</span>
                                            </div>
                                            <div className='border-bottom'>
                                                <span className='titles'>Fecha de cita</span>
                                                <span>{cita.fecha_cita}</span>
                                            </div>
                                            <div>
                                                <span className='titles'>Nota</span>
                                                <span className='notes'>{cita.notas}</span>
                                            </div>
                                        </BloqueInfoFlex>
                                    </DivEstadoCita>
                                </div>
                                {modalCitaId === cita.cita_id && (
                                    <ModalEdited className='modal-lg' show={true} onHide={handleClose}>
                                        <Modal.Body className='px-0 py-0'>
                                            <Banner estado={cita.estado_id}>
                                                <span>{cita.estado_id}</span>
                                                <h2 className='mb-0'>{cita.fecha_cita}</h2>
                                            </Banner>
                                            <div className='py-2 px-3'>
                                                <h2>Detalles</h2>
                                                <span>Id único: {cita.cita_id}</span>
                                                <br />
                                                <br />
                                                <span>Estudiante: {cita.estudiante_id}</span>
                                                <br />
                                                <br />
                                                <span>Fecha de creación: {cita.fecha_creacion}</span>
                                                <br />
                                                <br />
                                                <span>Fecha de actualización: {cita.fecha_actualizacion}</span>
                                                <br />
                                                <br />
                                                <span>Observaciones: {cita.notas}</span>
                                                <br />
                                                <br />
                                                {cita.estado_id !== 'Cancelada' ? (<div className='text-center'>
                                                    <button className='btn btn-sm btn-outline-danger' onClick={() => cancelarCita(cita.cita_id)}>Cancelar Cita</button>
                                                </div>) : undefined}
                                            </div>
                                        </Modal.Body>
                                    </ModalEdited>
                                )}
                            </React.Fragment >
                        </>
                    );
                })}
            </div >
        </>
    );
}

const DivEstadoCita = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 40px 0 12px 0;
    background: rgb(255 255 255 / 100%);
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    /* box-shadow: 0 0 1rem rgba(var(--bs-body-color-rgb), .05) !important; */
    ${props => props.estado === 'Asignada' && css`
    border: solid 4.5px #bff6c3;
    `}
    ${props => props.estado === 'Cancelada' && css`
    border: solid 4.5px hsl(0 100% 93% / 1);
    `}
    ${props => props.estado === 'Reprogramada' && css`
    border: solid 4.5px hsl(47.59deg 56.86% 92%);
    `}
    ${props => props.estado === 'Pendiente' && css`
    border: solid 4.5px hsl(0 0% 87.5% / 1);
    `}

    span.estado {
    padding: 0 12.5px;
    border-radius: 0 0 11px 0;
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.estado === 'Asignada' && css`
    font-weight: 500;
    color: hsl(124 65% 35% / 1);
    background: #BFF6C3;
    `}
    ${props => props.estado === 'Cancelada' && css`
    color: hsl(0 100% 77% / 1);
    background: hsl(0 100% 93% / 1);
    `}
    ${props => props.estado === 'Reprogramada' && css`
    background: hsl(47.59deg 56.86% 92%);
    color: hsl(60 30% 55% / 1);
    `}
    ${props => props.estado === 'Pendiente' && css`
    background: hsl(0 0% 87.5% / 1);
    color: hsl(0 0% 60% / 1);
    `}
    }
`;

const BloqueInfoFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    position: relative;

    div {
        background: #fff;
        margin: 0 12px;
    }

    span {
        display: block;
        width: 100%;
        text-align: end;
        color: hsl(0 0% 30% / 1);
    }


    span.titles {
        text-align: start;
        width: fit-content;
        font-size: 0.93rem;
        color: hsl(0 0% 73% / 1);
        /* background: hsl(0 0% 90% / 1); */
        /* padding: 0 8px; */
        /* border-radius: 50px; */
    }

    span.notes {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

const ModalEdited = styled(Modal)`
    div.modal-content {
        overflow: hidden;
        border: none;
    }
`;

const Banner = styled.div`
    width: 100%;
    height: 190px;
    background: #BFF6C3;
    padding: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    ${props => props.estado === 'Asignada' && css`
    background: #BFF6C3;
    `}
    ${props => props.estado === 'Cancelada' && css`
    background: hsl(0 100% 93% / 1);
    `}
    ${props => props.estado === 'Reprogramada' && css`
    background: hsl(47.59deg 56.86% 92%);
    `}
    ${props => props.estado === 'Pendiente' && css`
    background: hsl(0 0% 87.5% / 1);
    `}

    h2 {
    margin: 0;
    font-size: 3.5rem;
    letter-spacing: -3px;
    
    ${props => props.estado === 'Asignada' && css`
    color: hsl(124 35% 70% / 1);
    `}
    ${props => props.estado === 'Cancelada' && css`
    color: hsl(0 100% 85% / 1);
    `}
    ${props => props.estado === 'Reprogramada' && css`
    color: hsl(60 30% 55% / 1);
    `}
    ${props => props.estado === 'Pendiente' && css`
    color: hsl(0 0% 77% / 1);
    `}
    }

    span {
    background: rgb(0 0 0 / 45%);
    padding: 0 10px;
    border-radius: 50px;
    color: #fff;
    font-weight: 500;
    }
`;

export default EstadoDeCitasAdm;