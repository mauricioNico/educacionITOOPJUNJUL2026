/**
 * Motor
 */
public class Motor {

    private int cilindrada;
    private int potencia;
    private boolean encendido;

    /**
     * Constructor for the Motor class.
     * @param cilindrada por ejemplo 2000cc.
     * @param potencia la potencia del motor en caballos de fuerza (HP).
     */ 
    public Motor(int cilindrada, int potencia) {
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.encendido = false;
    }

    public void encender() {
        encendido = true;
        System.out.println("Motor encendido");
    }

    public void apagar() {
        encendido = false;
        System.out.println("Motor apagado");
    }

    public void mostrarEstado() {
        System.out.println("Motor " + cilindrada + " cc");
        System.out.println("Potencia: " + potencia + " HP");
        System.out.println("Encendido: " + encendido);
    }

    public boolean isEncendido() {
        return encendido;
    }
}
