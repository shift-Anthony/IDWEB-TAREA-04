export const filtrarMayores = (listaUsuarios) => {
    return listaUsuarios.filter(usuario => usuario.edad >= 18);
};