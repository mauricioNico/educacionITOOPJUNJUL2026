public class App {
    public static void main(String[] args) {
        // Crear una instancia de Persona usando el constructor con parámetros
        Persona persona1 = new Persona("Juan", 25);
        System.out.println("Nombre: " + persona1.getNombre() + ", Edad: " + persona1.getEdad());

        // Crear una instancia de Persona usando el constructor sobrecargado
        Persona persona2 = new Persona("María");
        System.out.println("Nombre: " + persona2.getNombre() + ", Edad: " + persona2.getEdad());

        // Crear una instancia de Persona usando el constructor por defecto
        Persona persona3 = new Persona();
        //los atributos no se inicializan directamente, por lo que se deben establecer mediante los setters
        persona3.setNombre("Mauricio");
        persona3.setEdad(48);
        System.out.println("Nombre: " + persona3.getNombre() + ", Edad: " + persona3.getEdad());
    }
}
