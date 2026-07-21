from alumno import Alumno
from curso import Curso


def main():

    print("=== SISTEMA DE GESTIÓN DE CURSOS ===")

    # Creación de un objeto de la clase Curso
    curso_python = Curso(
        "Programación Orientada a Objetos con Python",
        "POO-PY-01"
    )

    # Creación de objetos de la clase Alumno
    alumno1 = Alumno(
        "Ana",
        "Gómez",
        "40111222"
    )

    alumno2 = Alumno(
        "Carlos",
        "Pérez",
        "38999888"
    )

    alumno3 = Alumno(
        "Lucía",
        "Fernández",
        "42555666"
    )

    # Error intencional: cambio directo sin utilizar el setter.
    # La forma correcta sería: alumno3.nombre = "Laura"
    #alumno3.__nombre = "Laura"

    # Se muestran los alumnos antes de agregarlos
    curso_python.mostrar_alumnos()

    # Se agregan los objetos Alumno a la colección del Curso
    curso_python.agregar_alumno(alumno1)
    curso_python.agregar_alumno(alumno2)
    curso_python.agregar_alumno(alumno3)
    
    # Se muestran los alumnos almacenados
    curso_python.mostrar_alumnos()

    # Se consulta la cantidad de alumnos
    cantidad = curso_python.cantidad_alumnos()

    print(f"\nCantidad total de alumnos: {cantidad}")


if __name__ == "__main__":
    main()
