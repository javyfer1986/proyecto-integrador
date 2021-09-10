var clientes = [
    { cedula: '17555801669', nombre: 'TATIANA', apellido: 'DEMERA', email: 'tatiana_demera@hotmail.com', 
    edad: '17', ciudad: 'SAN MIGUEL DE LOS BANCOS', telefono: '0999273443' },
    { cedula: '17537111669', nombre: 'DYLAN', apellido: 'CRUZ', email: 'dylan_cruz@gmail.com', 
    edad: '19', ciudad: 'QUITO', telefono: '0984758586'},
    { cedula: '17510530669', nombre: 'ANGELO', apellido: 'DIAZ', email: 'angelo_diaza@yahoo.es', 
    edad: '19', ciudad: 'QUITO', telefono: '0979233558'},
    { cedula: '17177161669', nombre: 'JAVIER', apellido: 'PINTA', email: 'javier_pinta@hotmail.com', 
    edad: '34', ciudad: 'QUITO', telefono: '0987568660'},
    
];


function modificar(cedula, cliente) {
    const indice = clientes.findIndex(elementos => elementos.cedula == cedula);
    if (indice > -1) {
        clientes[indice] = cliente;
    }else{
        alert('No se encontró el Cliente');
    }
    guardarStorage();
    
}

function guardar(cliente){
    clientes.push(cliente);
    guardarStorage();
}

function eliminar(cedula){
    const indice = clientes.findIndex(elementos => elementos.cedula == cedula);
    if (indice > -1) {
        clientes.splice(indice, 1);
    }else{
        alert('No se encontró el Cliente');
    }
    guardarStorage();
}

function guardarStorage() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}



function recuperarUsuarios() {
    clientes = JSON.parse(localStorage.getItem('clientes'));
}

recuperarUsuarios();

function entrar(){
    window.location="../../4_Pagina principal_/principal.html";
}