class Curso:

    def __init__(self, nombre, codigo):
        self.__nombre = nombre
        self.__codigo = codigo
        self.__alumnos = []

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def codigo(self):
        return self.__codigo

    @codigo.setter
    def codigo(self, codigo):
        self.__codigo = codigo

    @property
    def alumnos(self):
        return tuple(self.__alumnos)

    def agregar_alumno(self, alumno):
        self.__alumnos.append(alumno)
        print(f"Alumno agregado: {alumno.nombre} {alumno.apellido}")

    def mostrar_alumnos(self):
        print(f"\nAlumnos del curso {self.__nombre}:")

        if len(self.__alumnos) == 0:
            print("El curso todavía no tiene alumnos.")
        else:
            for alumno in self.__alumnos:
                print(alumno)

    def cantidad_alumnos(self):
        return len(self.__alumnos)
