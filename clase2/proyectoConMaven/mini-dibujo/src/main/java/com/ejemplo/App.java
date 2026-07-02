package com.ejemplo;

import javax.swing.JOptionPane;
import processing.core.PApplet;

public class App extends PApplet {

    private static String funcionSeleccionada = "sen(x)";

    public void settings() {
        size(800, 600);
    }

    public void setup() {
        surface.setTitle("Graficador de funciones");
    }

    public void draw() {
        background(245);

        dibujarEjes();
        graficarFuncion();
        escribirTitulo();
    }

    public void dibujarEjes() {
        stroke(0);
        strokeWeight(2);

        line(50, height / 2, width - 50, height / 2);
        line(width / 2, 50, width / 2, height - 50);
    }

    public void graficarFuncion() {
        stroke(255, 0, 0);
        strokeWeight(3);
        noFill();

        beginShape();

        for (float xPixel = 50; xPixel <= width - 50; xPixel++) {

            double x = map(xPixel, 50, width - 50, -10, 10);
            double y = calcularY(x);

            if (!Double.isNaN(y) && !Double.isInfinite(y)) {
                float yPixel = map((float) y, -10, 10, height - 50, 50);
                vertex(xPixel, yPixel);
            }
        }

        endShape();
    }

    public double calcularY(double x) {

        switch (funcionSeleccionada) {
            case "sen(x)":
                return Math.sin(x);

            case "cos(x)":
                return Math.cos(x);

            case "x²":
                return x * x;

            case "x³":
                return x * x * x;

            case "ln(x)":
                if (x > 0) {
                    return Math.log(x);
                } else {
                    return Double.NaN;
                }

            default:
                return Math.sin(x);
        }
    }

    public void escribirTitulo() {
        fill(0);
        textSize(24);
        text("Funcion: y = " + funcionSeleccionada, 260, 40);
    }

    public static void main(String[] args) {

        String[] opciones = {
                "sen(x)",
                "cos(x)",
                "x²",
                "x³",
                "ln(x)"
        };

        String seleccion = (String) JOptionPane.showInputDialog(
                null,
                "Seleccione la funcion a graficar:",
                "Menu de funciones",
                JOptionPane.QUESTION_MESSAGE,
                null,
                opciones,
                opciones[0]
        );

        if (seleccion != null) {
            funcionSeleccionada = seleccion;
            PApplet.main("com.ejemplo.App");
        }
    }
}
