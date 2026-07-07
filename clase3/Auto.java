import java.util.ArrayList;

public class Auto {

    private String marca;
    private String modelo;
    private String color;
    private int velocidad;

    private Motor motor;
    private ArrayList<Rueda> ruedas;

    public Auto(String marca, String modelo, String color, Motor motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.motor = motor;
        this.velocidad = 0;
        this.ruedas = new ArrayList<Rueda>();
    }

    public void agregarRueda(Rueda rueda) {
        if (ruedas.size() < 5) {
            ruedas.add(rueda);
        } else {
            System.out.println("El auto ya tiene 5 ruedas.");
        }
    }

    public void encender() {
        motor.encender();
    }

    public void apagar() {
        motor.apagar();
        velocidad = 0;
    }

    public void acelerar(int incremento) {
        if (motor.isEncendido()) {
            velocidad += incremento;
            System.out.println("Velocidad actual: " + velocidad + " km/h");
        } else {
            System.out.println("No se puede acelerar. El motor está apagado.");
        }
    }

    public void frenar(int decremento) {
        velocidad -= decremento;

        if (velocidad < 0) {
            velocidad = 0;
        }

        System.out.println("Velocidad actual: " + velocidad + " km/h");
    }

    public void mostrarEstado() {
        System.out.println("Auto: " + marca + " " + modelo);
        System.out.println("Color: " + color);
        System.out.println("Velocidad: " + velocidad + " km/h");

        System.out.println("Estado del motor:");
        motor.mostrarEstado();

        System.out.println("Ruedas del auto:");
        for (Rueda rueda : ruedas) {
            rueda.mostrarEstado();
            System.out.println("----------------");
        }
    }
}