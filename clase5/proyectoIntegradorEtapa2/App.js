class App {

    constructor() {
        this.cliente = null;

        this.salida =
            document.getElementById("salida");

        this.estadoCliente =
            document.getElementById("estado-cliente");

        this.botonIniciar =
            document.getElementById("btn-iniciar");

        this.botonMenu =
            document.getElementById("btn-menu");

        this.botonLimpiar =
            document.getElementById("btn-limpiar");
    }

    // ==========================================
    // INICIO DE LA APLICACIÓN
    // ==========================================

    iniciar() {
        this.configurarEventos();

        this.mostrarMensaje(
            "Aplicación preparada. Presione «Registrar cliente» para comenzar.",
            "informacion"
        );
    }

    configurarEventos() {
        this.botonIniciar.addEventListener(
            "click",
            () => this.registrarCliente()
        );

        this.botonMenu.addEventListener(
            "click",
            () => this.mostrarMenu()
        );

        this.botonLimpiar.addEventListener(
            "click",
            () => this.limpiarHistorial()
        );
    }

    // ==========================================
    // REGISTRO DEL CLIENTE
    // ==========================================

    registrarCliente() {
        try {
            this.mostrarTitulo("REGISTRO DE CLIENTE");

            /*
             * Cada dato se solicita por separado.
             * Cuando el dato es inválido, se vuelve a pedir
             * únicamente ese dato.
             */

            const id = this.solicitarDato(
                "Ingrese el identificador del cliente:",
                Cliente.validarId,
                "ID"
            );

            const nombre = this.solicitarDato(
                "Ingrese el nombre del cliente:",
                Cliente.validarNombre,
                "Nombre"
            );

            const apellido = this.solicitarDato(
                "Ingrese el apellido del cliente:",
                Cliente.validarApellido,
                "Apellido"
            );

            const dni = this.solicitarDato(
                "Ingrese el DNI del cliente:",
                Cliente.validarDni,
                "DNI"
            );

            const email = this.solicitarDato(
                "Ingrese el correo electrónico:",
                Cliente.validarEmail,
                "Correo electrónico"
            );

            const password = this.solicitarDato(
                "Ingrese una contraseña de al menos 8 caracteres:",
                Cliente.validarPassword,
                "Contraseña",
                true
            );

            this.cliente = new Cliente(
                id,
                nombre,
                apellido,
                dni,
                email,
                password
            );

            this.mostrarMensaje(
                "Cliente creado correctamente.",
                "exito"
            );

            this.actualizarEstadoCliente();

            this.botonMenu.disabled = false;

            this.mostrarMensaje(
                "Ahora puede utilizar el menú de operaciones.",
                "informacion"
            );

        } catch (error) {
            this.mostrarMensaje(
                error.message,
                "advertencia"
            );
        }
    }

    solicitarDato(
        mensaje,
        funcionValidacion,
        nombreCampo,
        ocultarValor = false
    ) {
        while (true) {
            const valorIngresado = prompt(mensaje);

            if (valorIngresado === null) {
                throw new Error(
                    "El registro del cliente fue cancelado."
                );
            }

            try {
                const valorValidado =
                    funcionValidacion(valorIngresado);

                const valorMostrado = ocultarValor
                    ? "********"
                    : valorValidado;

                this.mostrarMensaje(
                    `${nombreCampo}: ${valorMostrado}`,
                    "dato"
                );

                return valorValidado;

            } catch (error) {
                this.mostrarMensaje(
                    `${nombreCampo}: ${error.message}`,
                    "error"
                );

                alert(
                    `${error.message}\n\nVuelva a ingresar el dato.`
                );
            }
        }
    }

    // ==========================================
    // MENÚ DE OPERACIONES
    // ==========================================

    mostrarMenu() {
        if (!this.cliente) {
            this.mostrarMensaje(
                "Primero debe registrar un cliente.",
                "advertencia"
            );

            return;
        }

        let opcion;

        do {
            opcion = prompt(
                "Seleccione una opción:\n\n" +
                "1. Mostrar datos del cliente\n" +
                "2. Mostrar nombre completo\n" +
                "3. Iniciar sesión\n" +
                "4. Modificar nombre\n" +
                "5. Modificar apellido\n" +
                "6. Actualizar correo electrónico\n" +
                "7. Cambiar contraseña\n" +
                "0. Cerrar menú"
            );

            if (opcion === null) {
                opcion = "0";
            }

            switch (opcion) {
                case "1":
                    this.mostrarDatos();
                    break;

                case "2":
                    this.mostrarNombreCompleto();
                    break;

                case "3":
                    this.iniciarSesion();
                    break;

                case "4":
                    this.modificarNombre();
                    break;

                case "5":
                    this.modificarApellido();
                    break;

                case "6":
                    this.modificarEmail();
                    break;

                case "7":
                    this.modificarPassword();
                    break;

                case "0":
                    this.mostrarMensaje(
                        "Menú cerrado.",
                        "informacion"
                    );
                    break;

                default:
                    this.mostrarMensaje(
                        `La opción «${opcion}» no es válida.`,
                        "error"
                    );

                    alert(
                        "La opción ingresada no es válida."
                    );
            }

        } while (opcion !== "0");
    }

    // ==========================================
    // OPERACIONES SOBRE EL CLIENTE
    // ==========================================

    mostrarDatos() {
        this.mostrarTitulo("DATOS DEL CLIENTE");

        const datos = this.cliente.obtenerDatos();

        this.mostrarMensaje(
            `ID: ${datos.id}`,
            "dato"
        );

        this.mostrarMensaje(
            `Nombre: ${datos.nombre}`,
            "dato"
        );

        this.mostrarMensaje(
            `Apellido: ${datos.apellido}`,
            "dato"
        );

        this.mostrarMensaje(
            `DNI: ${datos.dni}`,
            "dato"
        );

        this.mostrarMensaje(
            `Correo electrónico: ${datos.email}`,
            "dato"
        );
    }

    mostrarNombreCompleto() {
        this.mostrarMensaje(
            `Nombre completo: ${this.cliente.obtenerNombreCompleto()}`,
            "exito"
        );
    }

    iniciarSesion() {
        const email = this.solicitarDato(
            "Ingrese su correo electrónico:",
            Cliente.validarEmail,
            "Correo ingresado"
        );

        const password = prompt(
            "Ingrese su contraseña:"
        );

        if (password === null) {
            this.mostrarMensaje(
                "Inicio de sesión cancelado.",
                "advertencia"
            );

            return;
        }

        const autenticado = this.cliente.autenticar(
            email,
            password
        );

        if (autenticado) {
            this.mostrarMensaje(
                `Inicio de sesión correcto. Bienvenido, ${this.cliente.obtenerNombreCompleto()}.`,
                "exito"
            );
        } else {
            this.mostrarMensaje(
                "Correo electrónico o contraseña incorrectos.",
                "error"
            );
        }
    }

    modificarNombre() {
        const nuevoNombre = this.solicitarDato(
            "Ingrese el nuevo nombre:",
            Cliente.validarNombre,
            "Nuevo nombre"
        );

        this.cliente.setNombre(nuevoNombre);

        this.mostrarMensaje(
            "Nombre actualizado correctamente.",
            "exito"
        );

        this.actualizarEstadoCliente();
    }

    modificarApellido() {
        const nuevoApellido = this.solicitarDato(
            "Ingrese el nuevo apellido:",
            Cliente.validarApellido,
            "Nuevo apellido"
        );

        this.cliente.setApellido(nuevoApellido);

        this.mostrarMensaje(
            "Apellido actualizado correctamente.",
            "exito"
        );

        this.actualizarEstadoCliente();
    }

    modificarEmail() {
        while (true) {
            try {
                const nuevoEmail = prompt(
                    "Ingrese el nuevo correo electrónico:"
                );

                if (nuevoEmail === null) {
                    this.mostrarMensaje(
                        "Actualización de correo cancelada.",
                        "advertencia"
                    );

                    return;
                }

                const resultado =
                    this.cliente.actualizarEmail(nuevoEmail);

                this.mostrarMensaje(
                    resultado,
                    "exito"
                );

                this.mostrarMensaje(
                    `Nuevo correo: ${this.cliente.getEmail()}`,
                    "dato"
                );

                this.actualizarEstadoCliente();

                return;

            } catch (error) {
                this.mostrarMensaje(
                    error.message,
                    "error"
                );

                alert(
                    `${error.message}\n\nVuelva a ingresar el correo.`
                );
            }
        }
    }

    modificarPassword() {
        while (true) {
            try {
                const passwordActual = prompt(
                    "Ingrese la contraseña actual:"
                );

                if (passwordActual === null) {
                    this.mostrarMensaje(
                        "Cambio de contraseña cancelado.",
                        "advertencia"
                    );

                    return;
                }

                const passwordNueva = prompt(
                    "Ingrese la nueva contraseña:"
                );

                if (passwordNueva === null) {
                    this.mostrarMensaje(
                        "Cambio de contraseña cancelado.",
                        "advertencia"
                    );

                    return;
                }

                const resultado =
                    this.cliente.cambiarPassword(
                        passwordActual,
                        passwordNueva
                    );

                this.mostrarMensaje(
                    resultado,
                    "exito"
                );

                this.mostrarMensaje(
                    "Nueva contraseña: ********",
                    "dato"
                );

                return;

            } catch (error) {
                this.mostrarMensaje(
                    error.message,
                    "error"
                );

                alert(
                    `${error.message}\n\nVuelva a ingresar los datos.`
                );
            }
        }
    }

    // ==========================================
    // PRESENTACIÓN EN PANTALLA
    // ==========================================

    mostrarTitulo(texto) {
        const titulo = document.createElement("div");

        titulo.className = "mensaje titulo-terminal";
        titulo.textContent = `=== ${texto} ===`;

        this.salida.appendChild(titulo);
        this.desplazarSalida();
    }

    mostrarMensaje(mensaje, tipo = "informacion") {
        const elemento = document.createElement("div");

        elemento.className = `mensaje ${tipo}`;
        elemento.textContent = mensaje;

        this.salida.appendChild(elemento);
        this.desplazarSalida();

        console.log(mensaje);
    }

    actualizarEstadoCliente() {
        if (!this.cliente) {
            this.estadoCliente.innerHTML = `
                <p class="sin-cliente">
                    Todavía no se registró ningún cliente.
                </p>
            `;

            return;
        }

        const datos = this.cliente.obtenerDatos();

        /*
         * Utilizamos textContent en los valores para evitar
         * insertar directamente contenido ingresado por el usuario.
         */

        this.estadoCliente.innerHTML = "";

        const campos = [
            ["ID", datos.id],
            ["Nombre", datos.nombre],
            ["Apellido", datos.apellido],
            ["DNI", datos.dni],
            ["Correo electrónico", datos.email],
            ["Contraseña", "********"]
        ];

        campos.forEach(([etiqueta, valor]) => {
            const fila = document.createElement("div");
            fila.className = "fila-dato";

            const nombreCampo = document.createElement("span");
            nombreCampo.className = "etiqueta";
            nombreCampo.textContent = etiqueta;

            const valorCampo = document.createElement("span");
            valorCampo.className = "valor";
            valorCampo.textContent = valor;

            fila.appendChild(nombreCampo);
            fila.appendChild(valorCampo);

            this.estadoCliente.appendChild(fila);
        });
    }

    limpiarHistorial() {
        this.salida.innerHTML = "";

        this.mostrarMensaje(
            "Historial de operaciones limpiado.",
            "informacion"
        );
    }

    desplazarSalida() {
        this.salida.scrollTop =
            this.salida.scrollHeight;
    }
}

// ==========================================
// EJECUCIÓN PRINCIPAL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.iniciar();
});