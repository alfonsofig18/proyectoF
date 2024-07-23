import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { supabase } from '../supabase/Supabase';

const NewCita = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [psicologos, setPsicologos] = useState([])
    const [user, setUser] = useState({});
    const userLocalS = JSON.parse(localStorage.getItem('datuser'));

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const [nuevaCita, setNuevaCita] = useState({
        estudiante_id: user.usuario_id,
        psicologo_id: null,
        fecha_cita: '',
        duracion_minutos: null,
        estado_id: 5,
        notas: '',
        fecha_creacion: getCurrentDate(),
        fecha_actualizacion: getCurrentDate()
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaCita((prev) => ({
            ...prev,
            [name]: value
        }))
        console.log(nuevaCita);
    }
    useEffect(() => {
        setUser(userLocalS);
        axios({
            url: `http://ec2-52-207-249-250.compute-1.amazonaws.com:5000/api/v1/usuarios/`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AU2')}`,
            },
        }).then((res) => {
            setAllUsers(res.data)
            console.log(res.data);
        })
            .catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        setPsicologos(allUsers.filter((psicologo) => psicologo.rol_id === 3));
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
                        <div className="width-7x pt-1 bg-primary mb-7"></div>
                        <form id="contactForm" action="assets/contact/send_mail.php" method="post" role="form"
                            className="needs-validation mb-5 mb-lg-7">
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <label className="form-label" htmlFor="name">Psicologo</label>
                                    <select className="form-select form-select mb-3" aria-label=".form-select-lg example" name='psicologo_id' value={nuevaCita.psicologo_id} onChange={handleInputChange}>
                                        <option defaultValue="" disabled>Escoger psicólogo</option>
                                        {psicologos.map((psicologo) => {
                                            return (
                                                <option key={psicologo.usuario_id} value={psicologo.usuario_id}>{psicologo.nombre} {psicologo.apellidos}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="form-label" htmlFor="name">Estuante</label>
                                    <select className="form-select form-select mb-3" aria-label=".form-select-lg example">
                                        <option defaultValue="" disabled>Estudiante</option>
                                        <option value="1">{user.nombre} {user.apellidos}</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="form-label" htmlFor="name">Fecha agendación de cita</label>
                                    <input type="text" name="fecha_cita" onClick={handleInputChange} className="form-control" id="name"
                                        placeholder="10/02/2024" required />
                                </div>

                                <div className="col-sm-6 mb-3">
                                    <label className="form-label" htmlFor="email">Duración estimada</label>
                                    <select className="form-select form-select mb-3" aria-label=".form-select-lg example" name='duracion_minutos' value={nuevaCita.duracion_minutos} onChange={handleInputChange}>
                                        <option defaultValue="" disabled>Escoger duración</option>
                                        <option value='30'>30 minutos</option>
                                        <option value='45'>45 minutos</option>
                                    </select>
                                </div>

                            </div>

                            <div className="input-icon-group input-icon-group-lg mb-3">
                                <span className="input-icon">
                                    <i className='bx bx-message-square-detail' ></i>
                                </span>
                                <textarea rows="2" className="form-control form-control-lg"
                                    placeholder="Notas..." name='notas' value={nuevaCita.notas} onClick={handleInputChange}></textarea>
                            </div>

                            <div className="d-md-flex justify-content-between align-items-center">
                                <p className="small mb-4 text-body-secondary mb-md-0">La cita quedará sujeta a aprobación.</p>
                                <input type="submit" name="submit" value="Asignar cita" id="sendBtn"
                                    className="btn btn-md btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='row position-relative'>
                <div className='offset-lg-1 col-lg-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repudiandae quas aperiam vel? Itaque amet ea quo hic sunt similique! Rem illo unde deserunt inventore laudantium deleniti. Rem iusto voluptates quisquam consequatur beatae natus voluptate inventore reprehenderit cum eaque magni cumque eligendi voluptatibus, quia temporibus, sit iure quaerat, magnam quae nihil est suscipit molestias! Facere numquam reiciendis magnam dolorem. At dolores doloribus assumenda repudiandae, adipisci a totam quo accusantium labore suscipit? Assumenda doloremque sapiente in voluptatum nulla alias cupiditate inventore necessitatibus at? Ad doloremque iure sunt minus accusamus dolore perferendis ex fuga, illum voluptatem nulla est. Esse molestiae nemo, provident dignissimos, ratione eos sint voluptatum, similique vel tempora ab ad id? Perferendis voluptatibus vitae at, corporis qui exercitationem libero deserunt voluptas optio in error pariatur nam eum saepe molestiae ea cum iusto tempore, quia sit dicta expedita voluptatum natus fuga. Odit repellendus totam nemo temporibus soluta, rerum explicabo aut quis in, enim voluptatibus beatae numquam dolor ex molestiae quae officia consequuntur. Voluptates libero aperiam, cupiditate repellendus incidunt eos soluta aliquid minus esse non. Sit pariatur alias molestias magnam, iusto fuga qui nemo impedit? Autem beatae nam veniam, dolorum distinctio provident ratione dolorem suscipit, rerum labore totam? Fuga, ab omnis consequatur vitae amet sapiente placeat dicta magni veniam praesentium reprehenderit. Quibusdam nemo, sunt natus laboriosam in consectetur totam tempore consequuntur aspernatur, rerum voluptas, molestiae quasi? Voluptas pariatur, magni eaque error voluptate inventore, eos quas possimus nesciunt ducimus excepturi eveniet nemo dicta deleniti eum asperiores similique delectus nam! Velit vero omnis inventore, ea iure esse porro! Quaerat asperiores perferendis nesciunt corrupti non ad voluptatibus aliquid accusantium nobis, amet totam alias minima accusamus facilis consequuntur? Sapiente repellendus eveniet quia unde labore? Voluptatum suscipit eius vero eaque itaque ut. Quae nobis nulla mollitia error, quidem eligendi accusantium nemo ipsam eveniet, dolore voluptatem cum? Nihil!</p>
                </div>
            </div>
        </>
    );
}

export default NewCita;