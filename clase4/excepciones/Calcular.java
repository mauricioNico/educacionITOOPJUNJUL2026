package excepciones;

public class Calcular {
public static void main(String[] args) {
    int numerador = 10;
    int denominador = 0;
    if(dividir(numerador, denominador)!=0)
       System.out.println("Resultado: " + dividir(numerador, denominador)+" con resto: " + numerador % denominador);
    else
       System.out.println("No se puede realizar la división.");
}
    private static int dividir(int numerador, int denominador) {
       try {

              return numerador / denominador;
          } catch (ArithmeticException e) {
                System.out.println("Error: División por cero no permitida.");
                return 0; // Retorna un valor por defecto en caso de error
          }
       
}
}