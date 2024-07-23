import React, { useState, useEffect, useRef } from 'react';

const UserContext = React.createContext({});

// Context trabaja con dos objetos claves, el provider y el consumer
const UserProvider = ({ children }) => {
    // Usuario en sesión (true o false)
    const [arrays, setArrays] = useState([]);
    const [token, setToken] = useState(null);
    const [userObject, setUserObject] = useState(null);
    const initial = useRef(0);

    // Usuario
    const [user, setUser] = useState({
        usuario_id: null,
        nombre_usuario: null,
        correo_electronico: null,
        nombre: null,
        apellidos: null,
        activo: null,
        rol: null,
    });

    
    // Primer rendreizado
    useEffect(() => {
        const userLocalS = JSON.parse(localStorage.getItem('datuser'));
        const objects = {
            ...userLocalS,
            hoolas: 'Como',
        }
        setUserObject(objects);
        setArrays([
            {
                id: 1,
                name: 'Alfonso Figueroa',
                fecha_crea: '10/12/22',
                fecha_cita: '10/22/34',
                duracion: 10,
                nota: 'sintiendo bien y Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi aspernatur consequuntur perspiciatis officiis nihil dolorem excepturi qui. Ullam, voluptas!',
                estado: 'Asignada'
            },
            {
                id: 2,
                name: 'Beatriz Ramos',
                fecha_crea: '15/01/23',
                fecha_cita: '12/01/35',
                duracion: 15,
                nota: 'en recuperación y Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
                estado: 'Reprogramada'
            },
            {
                id: 3,
                name: 'Carlos Mendoza',
                fecha_crea: '05/03/22',
                fecha_cita: '11/17/34',
                duracion: 20,
                nota: 'mejorando lentamente y Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                estado: 'Cancelada'
            },
            {
                id: 4,
                name: 'Diana López',
                fecha_crea: '22/08/21',
                fecha_cita: '09/12/33',
                duracion: 25,
                nota: 'esperando resultados y Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                estado: 'Asignada'
            },
            {
                id: 5,
                name: 'Enrique Vargas',
                fecha_crea: '30/09/23',
                fecha_cita: '10/20/35',
                duracion: 30,
                nota: 'sintiéndose mejor y Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                estado: 'Reprogramada'
            }
        ]);
        console.log(userObject);
    }, []);

    useEffect(() => {
        // if (initial.current === 0) {
        //     initial.current = initial.current + 1;
        //     return;
        // }
        setUser(userObject);
    }, [userObject])


    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, arrays }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }
