using CalculadoraApp;

namespace Calculadora.Tests;

public class Tests
{
 [Test]
    public void PruebaSuma()
    {
        // Arrange
          var calculadora = new CalculadoraApp.Calculadora();

        // Act
        int resultado = calculadora.Sumar(4, 3);

        // Assert
        Assert.That(resultado, Is.EqualTo(10));
    }

    [Test]
    public void PruebaResta()
    {
        // Arrange
          var calculadora = new CalculadoraApp.Calculadora();

        // Act
        int resultado = calculadora.Restar(10, 4);

        // Assert
        Assert.That(resultado, Is.EqualTo(10));
    }


    
    
}
