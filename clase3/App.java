public class App {

    public static void main(String[] args) {
//generación de una instancia de la clase Motor llamada en este caso motor, con una cilindrada de 2000 cc y una potencia de 150 HP.
        Motor motor = new Motor(2000, 150);
//generación de una instancia de la clase Auto llamada en este caso auto, con la marca "Toyota", el modelo "Corolla", el color "Blanco" y el motor previamente creado.
        Auto auto = new Auto(
                "Toyota",
                "Corolla",
                "Blanco",
                motor
        );

        auto.agregarRueda(new Rueda("Pirelli", 17, false));
        auto.agregarRueda(new Rueda("Pirelli", 17, false));
        auto.agregarRueda(new Rueda("Pirelli", 17, false));
        auto.agregarRueda(new Rueda("Pirelli", 17, false));
        auto.agregarRueda(new Rueda("Pirelli", 17, true));
auto.agregarRueda(new Rueda("Pirelli", 17, false)); // Intento de agregar una sexta rueda, que no debería ser permitido.
        auto.mostrarEstado();

        auto.encender();
        auto.acelerar(30);
        auto.acelerar(40);
        auto.frenar(20);
        auto.apagar();

        System.out.println("Estado final:");
        auto.mostrarEstado();
    }
}