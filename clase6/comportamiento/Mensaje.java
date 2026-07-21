package comportamiento;

public class Mensaje {

    // Método de instancia
    public void enviarMensaje(Persona emisor, Persona receptor, String texto) {

        System.out.println("----------------------------------");
        System.out.println(emisor.getNombre() + " envía un mensaje a " + receptor.getNombre());
        System.out.println("Mensaje: " + texto);
        System.out.println(receptor.getNombre() + " recibió el mensaje.");
        System.out.println("----------------------------------");
    }

    // Método estático
    public static void mostrarEncabezado() {
        System.out.println("=== SISTEMA DE MENSAJES ===");
    }

}
