package mensajes;

public class Profesor {

    private String nombre;

    public Profesor(String nombre) {
        this.nombre = nombre;
    }

    // Método de instancia
    public void corregirExamen(Alumno alumno, double nota) {

        System.out.println(nombre + " corrige el examen de "
                + alumno.getNombre());

        alumno.recibirNota(nota);

        System.out.println("La nota fue registrada.");
    }
}
