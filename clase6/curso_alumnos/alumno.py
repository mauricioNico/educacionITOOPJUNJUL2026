class Alumno:

    __slots__ = ("__nombre", "__apellido", "__documento")

    def __init__(self, nombre, apellido, documento):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__documento = documento

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def apellido(self):
        return self.__apellido

    @apellido.setter
    def apellido(self, apellido):
        self.__apellido = apellido

    @property
    def documento(self):
        return self.__documento

    @documento.setter
    def documento(self, documento):
        self.__documento = documento

    def mostrar_datos(self):
        return (
            f"Nombre: {self.__nombre} {self.__apellido} | "
            f"Documento: {self.__documento}"
        )

    def __str__(self):
        return f"{self.__nombre} {self.__apellido} - DNI: {self.__documento}"
