package com.educacionIT.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet encargado de recibir datos mediante POST
 * y generar una respuesta HTML.
 */
@WebServlet("/saludar")
public class SaludoServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Atiende las solicitudes HTTP POST enviadas
     * a la ruta /saludar.
     *
     * @param request  solicitud enviada por el navegador
     * @param response respuesta generada por el servidor
     */
    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws ServletException, IOException {

        /*
         * Configuramos la codificación antes
         * de recuperar los parámetros.
         */
        request.setCharacterEncoding("UTF-8");

        /*
         * Recuperamos los datos enviados por el formulario.
         * Los nombres deben coincidir con los atributos name.
         */
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");

        /*
         * Validación realizada del lado del servidor.
         */
        if (nombre == null || nombre.isBlank()
                || apellido == null || apellido.isBlank()) {

            response.sendError(
                HttpServletResponse.SC_BAD_REQUEST,
                "El nombre y el apellido son obligatorios."
            );

            return;
        }

        /*
         * Indicamos que la respuesta será HTML
         * codificado en UTF-8.
         */
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();

        out.println("""
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta charset="UTF-8">

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                >

                <title>Respuesta del Servlet</title>

                <style>
                    body {
                        min-height: 100vh;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Arial, sans-serif;
                        background-color: #eef2f7;
                    }

                    .respuesta {
                        width: 460px;
                        padding: 30px;
                        text-align: center;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 5px 18px rgba(0, 0, 0, 0.15);
                    }

                    h1 {
                        color: #1d3557;
                    }

                    .datos {
                        margin: 20px 0;
                        padding: 15px;
                        background-color: #f5f7fa;
                        border-radius: 6px;
                    }

                    a {
                        display: inline-block;
                        margin-top: 15px;
                        padding: 10px 18px;
                        color: white;
                        text-decoration: none;
                        background-color: #1d3557;
                        border-radius: 5px;
                    }

                    a:hover {
                        background-color: #457b9d;
                    }
                </style>
            </head>

            <body>

                <main class="respuesta">

                    <h1>Datos recibidos correctamente</h1>
            """);

        out.println("<div class=\"datos\">");

        out.println(
            "<p><strong>Nombre:</strong> "
            + escaparHtml(nombre)
            + "</p>"
        );

        out.println(
            "<p><strong>Apellido:</strong> "
            + escaparHtml(apellido)
            + "</p>"
        );

        out.println("</div>");

        out.println(
            "<p>Hola, <strong>"
            + escaparHtml(nombre)
            + " "
            + escaparHtml(apellido)
            + "</strong>.</p>"
        );

        out.println("""
                    <p>
                        Esta respuesta fue generada
                        por un Servlet Java.
                    </p>

                    <a href="index.html">
                        Volver al formulario
                    </a>

                </main>

            </body>

            </html>
            """);
    }

    /**
     * Escapa caracteres que podrían ser interpretados
     * como código HTML.
     *
     * @param texto texto ingresado por el usuario
     * @return texto seguro para mostrar
     */
    private String escaparHtml(String texto) {

        if (texto == null) {
            return "";
        }

        return texto
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }
}