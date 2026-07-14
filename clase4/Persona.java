public class Persona{
    private String nombre;
    private int edad;
//constructor por defecto o vacío
    public Persona() {
       
    }
//constructor con parámetros para inicializar los atributos
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //constructor sobrecargado que solo recibe el nombre y asigna una edad por defecto
    public Persona(String nombre) {
        this.nombre = nombre;
        this.edad = 18; // edad por defecto si no se proporciona
    }
//getters y setters para acceder a los atributos privados
    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
}