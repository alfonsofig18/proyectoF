import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuario_id: null,
    nombre_usuario: null,
    correo_electronico: null,
    nombre: null,
    apellidos: null,
    activo: null,
    rol_id: null,
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const { usuario_id, nombre_usuario, correo_electronico, nombre, apellidos, activo, rol_id } = action.payload;
            state.usuario_id = usuario_id ?? state.usuario_id;
            state.nombre_usuario = nombre_usuario ?? state.nombre_usuario;
            state.correo_electronico = correo_electronico ?? state.correo_electronico;
            state.nombre = nombre ?? state.nombre;
            state.apellidos = apellidos ?? state.apellidos;
            state.activo = activo ?? state.activo;
            state.rol_id = rol_id ?? state.rol_id;
        },
        clearUser: () => initialState,
        setAuthFalse: (state) => {
            state.isAuth = false;
        },
        setAuthTrue: (state) => {
            state.isAuth = true;
        }
    }
})

export const { setUser, clearUser, setAuthFalse, setAuthTrue } = userSlice.actions;
// export const selectUser = (state) => ({
//     usuario_id: state.user.usuario_id,
//     nombre_usuario: state.user.nombre_usuario,
//     correo_electronico: state.user.correo_electronico,
//     nombre: state.user.nombre,
//     apellidos: state.user.apellidos,
//     activo: state.user.activo,
//     rol_id: state.user.rol_id,
// }); // Variable select que no funciona como debería
export default userSlice.reducer;