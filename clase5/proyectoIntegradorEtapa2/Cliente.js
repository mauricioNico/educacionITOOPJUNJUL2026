class Cliente {

    // ==========================================
    // ATRIBUTOS PRIVADOS
    // ==========================================

    #id;
    #nombre;
    #apellido;
    #dni;
    #email;
    #password;

    // ==========================================
    // CONSTRUCTOR
    // ==========================================

    constructor(id, nombre, apellido, dni, email, password) {
        this.setId(id);
        this.setNombre(nombre);
        this.setApellido(apellido);
        this.setDni(dni);
        this.setEmail(email);
        this.setPassword(password);
    }

    // ==========================================
    // MÉTODOS ESTÁTICOS DE VALIDACIÓN
    // ==========================================

    /*
     * Los setters y la clase App utilizan estos métodos.
     * De este modo, las validaciones no se repiten.
     */

    static validarId(id) {
        const idNumerico = Number(id);

        if (!Number.isInteger(idNumerico) || idNumerico <= 0) {
            throw new Error(
                "El ID debe ser un número entero positivo."
            );
        }

        return idNumerico;
    }

    static validarNombre(nombre) {
        if (typeof nombre !== "string") {
            throw new Error(
                "El nombre debe ser una cadena de texto."
            );
        }

        const nombreNormalizado = nombre.trim();

        if (nombreNormalizado === "") {
            throw new Error(
                "El nombre es obligatorio."
            );
        }

        if (nombreNormalizado.length < 2) {
            throw new Error(
                "El nombre debe tener al menos 2 caracteres."
            );
        }

        return nombreNormalizado;
    }

    static validarApellido(apellido) {
        if (typeof apellido !== "string") {
            throw new Error(
                "El apellido debe ser una cadena de texto."
            );
        }

        const apellidoNormalizado = apellido.trim();

        if (apellidoNormalizado === "") {
            throw new Error(
                "El apellido es obligatorio."
            );
        }

        if (apellidoNormalizado.length < 2) {
            throw new Error(
                "El apellido debe tener al menos 2 caracteres."
            );
        }

        return apellidoNormalizado;
    }

    static validarDni(dni) {
        const dniNormalizado = String(dni).trim();
        const expresionDni = /^\d{7,8}$/;

        if (!expresionDni.test(dniNormalizado)) {
            throw new Error(
                "El DNI debe contener 7 u 8 dígitos."
            );
        }

        return dniNormalizado;
    }

    static validarEmail(email) {
        if (typeof email !== "string") {
            throw new Error(
                "El correo electrónico debe ser una cadena de texto."
            );
        }

        const emailNormalizado = email.trim().toLowerCase();
        const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionEmail.test(emailNormalizado)) {
            throw new Error(
                "El correo electrónico no tiene un formato válido."
            );
        }

        return emailNormalizado;
    }

    static validarPassword(password) {
        if (typeof password !== "string") {
            throw new Error(
                "La contraseña debe ser una cadena de texto."
            );
        }

        if (password.length < 8) {
            throw new Error(
                "La contraseña debe tener al menos 8 caracteres."
            );
        }

        return password;
    }

    // ==========================================
    // GETTERS
    // ==========================================

    getId() {
        return this.#id;
    }

    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getDni() {
        return this.#dni;
    }

    getEmail() {
        return this.#email;
    }

    getPassword() {
        return this.#password;
    }

    // ==========================================
    // SETTERS
    // ==========================================

    setId(id) {
        this.#id = Cliente.validarId(id);
    }

    setNombre(nombre) {
        this.#nombre = Cliente.validarNombre(nombre);
    }

    setApellido(apellido) {
        this.#apellido = Cliente.validarApellido(apellido);
    }

    setDni(dni) {
        this.#dni = Cliente.validarDni(dni);
    }

    setEmail(email) {
        this.#email = Cliente.validarEmail(email);
    }

    setPassword(password) {
        this.#password = Cliente.validarPassword(password);
    }

    // ==========================================
    // MÉTODOS DE COMPORTAMIENTO
    // ==========================================

    obtenerNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    autenticar(email, password) {
        const emailNormalizado =
            Cliente.validarEmail(email);

        if (typeof password !== "string") {
            throw new Error(
                "Debe ingresar una contraseña."
            );
        }

        return (
            this.#email === emailNormalizado &&
            this.#password === password
        );
    }

    actualizarEmail(nuevoEmail) {
        const emailNormalizado =
            Cliente.validarEmail(nuevoEmail);

        if (emailNormalizado === this.#email) {
            throw new Error(
                "El nuevo correo debe ser diferente del correo actual."
            );
        }

        this.#email = emailNormalizado;

        return "Correo electrónico actualizado correctamente.";
    }

    cambiarPassword(passwordActual, passwordNueva) {
        if (typeof passwordActual !== "string") {
            throw new Error(
                "Debe ingresar la contraseña actual."
            );
        }

        if (passwordActual !== this.#password) {
            throw new Error(
                "La contraseña actual es incorrecta."
            );
        }

        const passwordNuevaValidada =
            Cliente.validarPassword(passwordNueva);

        if (passwordNuevaValidada === passwordActual) {
            throw new Error(
                "La nueva contraseña debe ser diferente de la actual."
            );
        }

        this.#password = passwordNuevaValidada;

        return "Contraseña modificada correctamente.";
    }

    obtenerDatos() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            apellido: this.#apellido,
            dni: this.#dni,
            email: this.#email
        };
    }

    toString() {
        return (
            `ID: ${this.#id}\n` +
            `Nombre: ${this.#nombre}\n` +
            `Apellido: ${this.#apellido}\n` +
            `DNI: ${this.#dni}\n` +
            `Email: ${this.#email}`
        );
    }
}
/*
 * Esta condición permite exportar Cliente cuando el archivo
 * se ejecuta mediante Node.js y Jest.
 *
 * En el navegador, "module" no existe, por lo que esta parte
 * simplemente se ignora.
 */

if (typeof module !== "undefined" && module.exports) {
    module.exports = Cliente;
}