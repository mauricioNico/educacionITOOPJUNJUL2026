package comportamiento;

public class App {

    public static void main(String[] args) {

        // ===========================
        // MÉTODOS ESTÁTICOS
        // ===========================

        Mensaje.mostrarEncabezado();

        Persona.mostrarCantidadPersonas();

        System.out.println();

        // ===========================
        // CREACIÓN DE OBJETOS
        // ===========================

        Persona juan = new Persona("Juan", 25);
        Persona maria = new Persona("María", 22);

        Mensaje servicioMensajes = new Mensaje();

        System.out.println();

        Persona.mostrarCantidadPersonas();

        System.out.println();

        // ===========================
        // MÉTODOS DE INSTANCIA
        // ===========================

        juan.saludar();
        maria.saludar();

        System.out.println();

        juan.presentarse();
        maria.presentarse();

        System.out.println();

        // ===========================
        // PASO DE MENSAJES ENTRE OBJETOS
        // ===========================

        servicioMensajes.enviarMensaje(
                juan,
                maria,
                "Hola María, ¿cómo estás?"
        );

        servicioMensajes.enviarMensaje(
                maria,
                juan,
                "Muy bien Juan. ¡Gracias!"
        );

    }
}
