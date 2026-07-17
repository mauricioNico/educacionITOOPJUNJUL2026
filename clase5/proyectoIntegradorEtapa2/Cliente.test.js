const Cliente = require("./Cliente");

describe("Pruebas unitarias de la clase Cliente", () => {

    /*
     * Esta variable estará disponible para todas
     * las pruebas del bloque describe.
     */

    let cliente;

    /*
     * beforeEach se ejecuta antes de cada prueba.
     *
     * De este modo, cada test comienza con un objeto nuevo
     * y no depende de modificaciones realizadas por otros tests.
     */

    beforeEach(() => {
        cliente = new Cliente(
            1,
            "Juan",
            "Pérez",
            "32145678",
            "juan@gmail.com",
            "clave123"
        );
    });

    // ==========================================
    // PRUEBAS DE CREACIÓN
    // ==========================================

    describe("Creación de clientes", () => {

        test("debe crear un cliente con datos válidos", () => {
            expect(cliente).toBeInstanceOf(Cliente);
        });

        test("debe guardar correctamente los datos del cliente", () => {
            expect(cliente.getId()).toBe(1);
            expect(cliente.getNombre()).toBe("Juan");
            expect(cliente.getApellido()).toBe("Pérez");
            expect(cliente.getDni()).toBe("32145678");
            expect(cliente.getEmail()).toBe("juan@gmail.com");
        });

        test("debe devolver el nombre completo", () => {
            expect(
                cliente.obtenerNombreCompleto()
            ).toBe("Juan López");
        });

        test("debe normalizar el correo electrónico", () => {
            const otroCliente = new Cliente(
                2,
                "Ana",
                "Gómez",
                "30123456",
                "  ANA.GOMEZ@GMAIL.COM  ",
                "password123"
            );

            expect(
                otroCliente.getEmail()
            ).toBe("ana.gomez@gmail.com");
        });

        test("debe eliminar espacios del nombre y apellido", () => {
            const otroCliente = new Cliente(
                3,
                "  Pedro  ",
                "  López  ",
                "29123456",
                "pedro@gmail.com",
                "password123"
            );

            expect(
                otroCliente.getNombre()
            ).toBe("Pedro");

            expect(
                otroCliente.getApellido()
            ).toBe("López");
        });

    });

    // ==========================================
    // PRUEBAS DE MODIFICACIÓN
    // ==========================================

    describe("Modificación de clientes", () => {

        test("debe modificar el nombre", () => {
            cliente.setNombre("Juan Carlos");

            expect(
                cliente.getNombre()
            ).toBe("Juan Carlos");
        });

        test("debe modificar el apellido", () => {
            cliente.setApellido("González");

            expect(
                cliente.getApellido()
            ).toBe("González");
        });

        test("debe modificar el DNI", () => {
            cliente.setDni("30111222");

            expect(
                cliente.getDni()
            ).toBe("30111222");
        });

        test("debe actualizar el correo electrónico", () => {
            const resultado = cliente.actualizarEmail(
                "juan.perez@gmail.com"
            );

            expect(
                cliente.getEmail()
            ).toBe("juan.perez@gmail.com");

            expect(resultado).toBe(
                "Correo electrónico actualizado correctamente."
            );
        });

        test("debe cambiar la contraseña", () => {
            const resultado = cliente.cambiarPassword(
                "clave123",
                "NuevaClave2026"
            );

            expect(
                cliente.getPassword()
            ).toBe("NuevaClave2026");

            expect(resultado).toBe(
                "Contraseña modificada correctamente."
            );
        });

        test("debe autenticar con los nuevos datos", () => {
            cliente.actualizarEmail(
                "juan.perez@gmail.com"
            );

            cliente.cambiarPassword(
                "clave123",
                "NuevaClave2026"
            );

            const autenticado = cliente.autenticar(
                "juan.perez@gmail.com",
                "NuevaClave2026"
            );

            expect(autenticado).toBe(true);
        });

    });

    // ==========================================
    // PRUEBAS DE EXCEPCIONES
    // ==========================================

    describe("Validaciones y excepciones", () => {

        test("no debe crear un cliente con ID negativo", () => {
            expect(() => {
                new Cliente(
                    -1,
                    "Ana",
                    "Gómez",
                    "30123456",
                    "ana@gmail.com",
                    "password123"
                );
            }).toThrow(
                "El ID debe ser un número entero positivo."
            );
        });

        test("no debe crear un cliente con nombre vacío", () => {
            expect(() => {
                new Cliente(
                    2,
                    "",
                    "Gómez",
                    "30123456",
                    "ana@gmail.com",
                    "password123"
                );
            }).toThrow(
                "El nombre es obligatorio."
            );
        });

        test("no debe aceptar un DNI inválido", () => {
            expect(() => {
                cliente.setDni("123");
            }).toThrow(
                "El DNI debe contener 7 u 8 dígitos."
            );
        });

        test("no debe aceptar un correo electrónico inválido", () => {
            expect(() => {
                cliente.setEmail("correo-invalido");
            }).toThrow(
                "El correo electrónico no tiene un formato válido."
            );
        });

        test("no debe aceptar una contraseña corta", () => {
            expect(() => {
                cliente.setPassword("123");
            }).toThrow(
                "La contraseña debe tener al menos 8 caracteres."
            );
        });

        test("no debe cambiar la contraseña si la actual es incorrecta", () => {
            expect(() => {
                cliente.cambiarPassword(
                    "claveIncorrecta",
                    "NuevaClave2026"
                );
            }).toThrow(
                "La contraseña actual es incorrecta."
            );
        });

        test("no debe actualizar el cliente con el mismo correo", () => {
            expect(() => {
                cliente.actualizarEmail(
                    "juan@gmail.com"
                );
            }).toThrow(
                "El nuevo correo debe ser diferente del correo actual."
            );
        });

    });

});