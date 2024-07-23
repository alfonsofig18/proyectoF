import { useEffect, useState } from "react";

const Spinner = (miliseconds) => {
    const [spinner, cambiarEstadoSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            cambiarEstadoSpinner(false);
        }, miliseconds);
    }, [])
    return [spinner];
}

export default Spinner;