const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#formulario__grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#formulario__grupo__${campo} i`).classList.remove('fa-times-circle');
		campos[campo] = true;
	} else {
		document.querySelector(`#formulario__grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#formulario__grupo__${campo} i`).classList.remove('fa-check-circle');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.password){
        formulario.reset();
        (async () => {
            const { value: accept } = await Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                text: 'El inicio de sesión fue realizado con exito ✨'
            })
            
            if (accept) {
                //Swal.fire('You agreed with T&C :)')
                window.location.href = "index.html";
            }
        })()
	} else {
		(async () => {
            const { value: accept } = await Swal.fire({
                icon: 'error',
                title: '¡Ooops!',
                text: 'Favor de revisar su información 🔎'
            })
        })()
	}
});