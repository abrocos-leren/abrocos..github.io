let randomNumber = Math.floor(Math.random() * 30);  //creo un numero random.
new Date().getFullYear()  // obtener año actual.
document.getElementById("year").innerHTML = new Date().getFullYear(); //Ponemos el año actual en el footer.
fetch('https://randomuser.me/api/?nat=es') //hacemos una peticion a randomuser.
	.then(response => response.json())
	.then(data => {
        cvForm(data);   
    })
	.catch(err => console.error(err));

fetch('https://picsum.photos/v2/list') // Peticion a picsum.
	.then(response => response.json())
	.then(data => {
        document.getElementById('avatar-div').style.backgroundImage = `url('${data[randomNumber].download_url}')`; 
    })
	.catch(err => console.error(err));
//Con esto creamos un fondo aleatorio para el avatar.

//Inicio de construccion de informacion utilizando la API randomuser, obtenemos una imagen, nombre y  datos varios para plasmar en el dom.
function cvForm(data) {
    document.getElementById('avatar').src = data.results[0].picture.large;
    document.getElementById('nombre').innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}.`;
    document.getElementById('edad').innerHTML = data.results[0].dob.age;
    document.getElementById('celular').innerHTML = data.results[0].cell;
    document.getElementById('tel').href = `tel:+${data.results[0].cell}`;
    document.getElementById('email').innerHTML = data.results[0].email;
    document.getElementById('mailto').href = `mailto:${data.results[0].email}?asunto=Interesados%20en%20contactarte%20`
    document.getElementById('ciudad').innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;
    if (data.results[0].gender === 'female') {
        document.getElementById('interes').innerHTML = 'interesada'
    } else {
        document.getElementById('interes').innerHTML = 'interesado'
    }
}
//Fin de construccion de informacion.