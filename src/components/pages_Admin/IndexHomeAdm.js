import React from 'react';
import { useSelector } from 'react-redux';

const IndexHomeAdm = () => {
    const userRedux = useSelector((state) => state.user)
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <h2>Bienvenido administrador, {userRedux.nombre} {userRedux.apellidos}</h2>
                </div>
            </div>
        </>
    );
}

export default IndexHomeAdm;