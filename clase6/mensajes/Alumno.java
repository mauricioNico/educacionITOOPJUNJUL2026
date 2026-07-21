package mensajes;

public class Alumno {

    private String nombre;
    private double nota;

    public Alumno(String nombre) {
        this.nombre = nombre;
        this.nota = 0;
    }

    // Método de instancia
    public void recibirNota(double nota) {
        this.nota = nota;
    }

    // Método de instancia
    public void mostrarDatos() {
        System.out.println("Alumno: " + nombre);
        System.out.println("Nota: " + nota);
    }

    public String getNombre() {
        return nombre;
    }
}