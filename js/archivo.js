
document.addEventListener('DOMContentLoaded', function(){
	iniciarApp();
});

const iniciarApp = () =>{
	mostrarServicios();
}

async function mostrarServicios() {
	try{
		const resultado = await fetch('./servicios.json');
		const db = await resultado.json();

		const {servicios} = db;

		//Generar HTML
		servicios.forEach(servicio =>{
			const {id, nombre, precio} = servicio;

			//DOM SCRIPT
			//Generar nombre servicio
			const nombreServicio = document.createElement('P');
			nombreServicio.textContent = nombre;
			nombreServicio.classList.add('nombre-servicio');

			//Generar precio servicio
			const precioServicio = document.createElement('P');
			precioServicio.textContent = '$ ' + precio;
			precioServicio.classList.add('descripcion-servicio');

			//Generar div
			const servicioDiv = document.createElement('DIV');
			servicioDiv.classList.add('servicio');
			servicioDiv.dataset.idServicio = id;

			//Seleccionar div para cita
			servicioDiv.onclick = seleccionarServicio;

			//inyectar precio y service
			servicioDiv.appendChild(nombreServicio);
			servicioDiv.appendChild(precioServicio);

			//Inyecarle al HTML
			document.querySelector('#servicios').appendChild(servicioDiv);
		})
    }catch(error){
		console.log(error);
    }

}