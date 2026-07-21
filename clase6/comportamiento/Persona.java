package comportamiento;

public class Persona {

    private String nombre;
    private int edad;

    // Atributo estático (compartido por todas las personas)
    private static int cantidadPersonas = 0;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
        cantidadPersonas++;
    }

    // Método de instancia
    public void saludar() {
        System.out.println("Hola, soy " + nombre);
    }

    // Método de instancia
    public void presentarse() {
        System.out.println("Me llamo " + nombre + " y tengo " + edad + " años.");
    }

       // Método estático
    public static void mostrarCantidadPersonas() {
        System.out.println("Cantidad de personas creadas: " + cantidadPersonas);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public static int getCantidadPersonas() {
        return cantidadPersonas;
    }

    public static void setCantidadPersonas(int cantidadPersonas) {
        Persona.cantidadPersonas = cantidadPersonas;
    }
    
}
