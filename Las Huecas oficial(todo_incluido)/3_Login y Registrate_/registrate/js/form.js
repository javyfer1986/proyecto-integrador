
function actualizarClientes(cedulaModificada, nombreModificado, apellidoModificado, emailModificado, edadModificado,
    ciudadModificada, telefonoModificado) {

   const cliente =
   {
       cedula: cedulaModificada,
       nombre: nombreModificado,
       apellido: apellidoModificado,
       email: emailModificado,
       edad: edadModificado,
       ciudad: ciudadModificada,
       telefono: telefonoModificado
   };

   modificar(cedulaModificada, cliente);
   listarClientesTabla();
   
}

function listarClientesTabla() {

     document.getElementById('listarClientesTabla').innerHTML = "";

     for (var i = 0; i < clientes.length; i++) {
       
          document.getElementById('listarClientesTabla').innerHTML += 
           `    
               <tr>
                   <td>
                        ${clientes[i].cedula}
                   </td>
                   <td>
                        ${clientes[i].nombre}
                   </td>
                   <td>
                        ${clientes[i].apellido}
                   </td>
                   <td>
                        ${clientes[i].email}
                   </td>
                   <td>
                        ${clientes[i].edad}
                   </td>
                   <td>
                        ${clientes[i].ciudad}
                   </td>
                   <td>
                        ${clientes[i].telefono}
                   </td>
                   <td>
                       <button class="btn btn-info" onclick="editar('${clientes[i].cedula}','${clientes[i].nombre}',
                       '${clientes[i].apellido}','${clientes[i].email}','${clientes[i].edad}',
                       '${clientes[i].ciudad}','${clientes[i].telefono}')"> EDITAR
                       </button>
                       <button class="btn btn-danger" onclick="eliminarCliente('${clientes[i].cedula}')">ELIMINAR </button>
                   </td>
                   
               </tr>
       `
   }
}

listarClientesTabla();

function editar(cedula, nombre, apellido, email, edad, ciudad, telefono) {
   document.getElementById('cedula').value = cedula;
   document.getElementById('nombre').value = nombre;
   document.getElementById('apellido').value = apellido;
   document.getElementById('email').value = email;
   document.getElementById('edad').value = edad;
   document.getElementById('ciudad').value = ciudad;
   document.getElementById('telefono').value = telefono;
}

function eliminarCliente(cedula){
     eliminar(cedula);
     listarClientesTabla();
}

//listarClientesTabla();



function crear(clientes){
   var cedula = document.getElementById("cedula").value;
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var email = document.getElementById("email").value;
   var edad = document.getElementById("edad").value;
   var ciudad = document.getElementById("ciudad").value;
   var telefono = document.getElementById("telefono").value;

   const cliente =
   {
       cedula: cedula,
       nombre: nombre,
       apellido: apellido,
       email: email,
       edad: edad,
       ciudad: ciudad,
       telefono: telefono
   };

   guardar(cliente);
   listarClientesTabla();

}

