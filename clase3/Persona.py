class Persona:

    # Constructor
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    # Método para saludar
    def saludar(self):
        print(f"Hola, soy {self.nombre} {self.apellido}.")

    # Método para cumplir años
    def cumplir_anios(self):
        self.edad += 1
        print(f"¡Ahora tengo {self.edad} años!")

    # Método para mostrar los datos
    def mostrar_datos(self):
        print("===== DATOS DE LA PERSONA =====")
        print(f"Nombre   : {self.nombre}")
        print(f"Apellido : {self.apellido}")
        print(f"Edad     : {self.edad}")