public class Rueda {

    private String marca;
    private int rodado;
    private double presion;
    private boolean auxilio;

    public Rueda(String marca, int rodado, boolean auxilio) {
        this.marca = marca;
        this.rodado = rodado;
        this.auxilio = auxilio;
        this.presion = 32;
    }

    public void inflar() {
        presion = 32;
        System.out.println("Rueda inflada");
    }

    public void desinflar() {
        presion = 15;
        System.out.println("Rueda desinflada");
    }

    public void mostrarEstado() {
        System.out.println("Marca: " + marca);
        System.out.println("Rodado: " + rodado);
        System.out.println("Presión: " + presion + " PSI");
        System.out.println("Auxilio: " + auxilio);
    }
}
