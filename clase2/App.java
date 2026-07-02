/**
 * necesidad de importar librerias para poder usar listas y scanner
 */
import java.util.List;
import java.util.Scanner;
public class App{
    public static void main(String[] args) {
       List<String> list = new java.util.ArrayList<>();
       
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresar frutas (s para salir):");
        while (true) {
            String input = scanner.nextLine();
            if (input.equalsIgnoreCase("s")) {
                break;
            }
            list.add(input);
        }
       System.out.println(list);
       scanner.close();
    }
}