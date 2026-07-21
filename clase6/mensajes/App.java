package mensajes;

public class App {

    public static void main(String[] args) {

        Alumno alumno = new Alumno("Juan");
        Profesor profesor = new Profesor("Laura");

        System.out.println("Estado inicial");
        alumno.mostrarDatos();

        System.out.println();

        profesor.corregirExamen(alumno, 9.5);

        System.out.println();

        System.out.println("Estado final");
        alumno.mostrarDatos();
    }
}
