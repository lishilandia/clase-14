// URL GET Users
const URLGET = 'https://jsonplaceholder.typicode.com/users';

// handler evento click en btn1
$('#btn1').click(() => {
  $.get(URLGET, (respuesta, estado) => {
    console.log('Response', respuesta);
    console.log('Estado', estado);
    if (estado === 'success') {
      respuesta.forEach(usuario => {
        $('#usuarios').prepend(`<div>
<p>${usuario.name}&nbsp;&nbsp;<small>${usuario.email}</small></p>
</div>`);
      });
      
    }
  });
});
console.log('bye!');
