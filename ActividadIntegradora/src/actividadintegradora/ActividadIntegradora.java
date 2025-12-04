/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package actividadintegradora;

import java.util.Scanner;


public class ActividadIntegradora {

        public static void main(String[] args) {
            
        Scanner scanner = new Scanner(System.in);
        GestionProfesores gestionProfesores = new GestionProfesores();
        GestionAlumnos gestionAlumnos = new GestionAlumnos();
        int opcion;

        do {
            System.out.println("\n=========================================");
            System.out.println("           MENU PRINCIPAL");
            System.out.println("=========================================");
            System.out.println("1. Altas de Alumnos");
            System.out.println("2. Altas de Profesores");
            System.out.println("3. Bajas de Alumnos");
            System.out.println("4. Bajas de Profesores");
            System.out.println("5. Cambios de Alumnos");
            System.out.println("6. Cambios de Profesores");
            System.out.println("7. Consultas de Alumnos");
            System.out.println("8. Consultas de Profesores");
            System.out.println("9. Listado de Grupo");
            System.out.println("0. Salir");
            System.out.println("=========================================");
            System.out.print("Seleccione una opcion: ");
            opcion = scanner.nextInt();
            scanner.nextLine();

            if (opcion == 1) { // Altas de Alumnos
                Alumno alumno = new Alumno();
                System.out.print("Numero de boleta: ");
                int numBoleta = scanner.nextInt();
                scanner.nextLine();
                alumno.setNumeroBoleta(numBoleta);

                System.out.print("Nombre: ");
                String nombreAlumno = scanner.nextLine();
                alumno.setNombre(nombreAlumno);

                System.out.print("Direccion: ");
                String direccionAlumno = scanner.nextLine();
                alumno.setDireccion(direccionAlumno);

                System.out.print("Grupo: ");
                String grupoAlumno = scanner.nextLine();
                alumno.setGrupo(grupoAlumno);

                System.out.print("Genero (0: Masculino, 1: Femenino): ");
                float genero = scanner.nextFloat();
                alumno.setGenero(genero);
                gestionAlumnos.agregarAlumno(alumno);
                
            } else if (opcion == 2) { // Altas de Profesores
                Profesor profesor = new Profesor();
                System.out.print("Numero de profesor: ");
                int numProfesor = scanner.nextInt();
                scanner.nextLine();
                profesor.setNumeroProfesor(numProfesor);

                System.out.print("Nombre: ");
                String nombreProfesor = scanner.nextLine();
                profesor.setNombre(nombreProfesor);

                System.out.print("Direccion: ");
                String direccionProfesor = scanner.nextLine();
                profesor.setDireccion(direccionProfesor);

                System.out.print("Sueldo: ");
                float sueldoProfesor = scanner.nextFloat();
                scanner.nextLine();
                profesor.setSueldo(sueldoProfesor);

                System.out.print("Grupo: ");
                String grupoProfesor = scanner.nextLine();
                profesor.setGrupo(grupoProfesor);

                System.out.print("Turno: ");
                String turnoProfesor = scanner.nextLine();
                profesor.setTurno(turnoProfesor);

                System.out.print("Especialidad: ");
                String especialidadProfesor = scanner.nextLine();
                profesor.setEspecialidad(especialidadProfesor);
                gestionProfesores.agregarProfesor(profesor);
                
            } else if (opcion == 3) { // Bajas de Alumnos
                System.out.print("Numero de boleta del alumno a eliminar: ");
                int boletaEliminar = scanner.nextInt();
                gestionAlumnos.eliminarAlumno(boletaEliminar);
                
            } else if (opcion == 4) { // Bajas de Profesores
                System.out.print("Numero de profesor a eliminar: ");
                int numProfesorEliminar = scanner.nextInt();
                gestionProfesores.eliminarProfesor(numProfesorEliminar);
                
            } else if (opcion == 5) { // Cambios de Alumnos
                System.out.print("Numero de boleta del alumno a modificar: ");
                int boletaModificar = scanner.nextInt();
                scanner.nextLine();
                System.out.print("Nuevo nombre: ");
                String nuevoNombre = scanner.nextLine();
                System.out.print("Nueva direccion: ");
                String nuevaDireccion = scanner.nextLine();
                System.out.print("Nuevo grupo: ");
                String nuevoGrupo = scanner.nextLine();
                System.out.print("Nuevo genero (0: Masculino, 1: Femenino): ");
                float nuevoGenero = scanner.nextFloat();
                gestionAlumnos.modificarAlumno(boletaModificar, nuevoNombre, nuevaDireccion, nuevoGrupo, nuevoGenero);
                
            } else if (opcion == 6) { // Cambios de Profesores
                System.out.print("Numero de profesor a modificar: ");
                int profesorModificar = scanner.nextInt();
                scanner.nextLine();
                System.out.print("Nuevo nombre: ");
                String nuevoNombre = scanner.nextLine();
                System.out.print("Nueva dirección: ");
                String nuevaDireccion = scanner.nextLine();
                System.out.print("Nuevo sueldo: ");
                float nuevoSueldo = scanner.nextFloat();
                scanner.nextLine();
                System.out.print("Nuevo grupo: ");
                String nuevoGrupo = scanner.nextLine();
                System.out.print("Nuevo turno: ");
                String nuevoTurno = scanner.nextLine();
                System.out.print("Nueva especialidad: ");
                String nuevaEspecialidad = scanner.nextLine();
                gestionProfesores.modificarProfesor(profesorModificar, nuevoNombre, nuevaDireccion, nuevoSueldo, 
                        nuevoGrupo, nuevoTurno, nuevaEspecialidad);
                
                
            } else if (opcion == 7) { // Consultas de Alumnos
                System.out.print("Numero de boleta del alumno a consultar: ");
                int boletaConsulta = scanner.nextInt();
                gestionAlumnos.consultarAlumno(boletaConsulta);
                
            } else if (opcion == 8) { // Consultas de Profesores
                System.out.print("Numero de profesor a consultar: ");
                int profesorConsulta = scanner.nextInt();
                gestionProfesores.consultarProfesor(profesorConsulta);
                
            } else if (opcion == 9) { // Listado de Grupo
                System.out.print("Ingrese el nombre del grupo para listar los alumnos o profesores: ");
                String grupoListado = scanner.nextLine();

                System.out.println("Seleccione el tipo de listado:");
                System.out.println("1. Listar Alumnos");
                System.out.println("2. Listar Profesores");
                int tipoListado = scanner.nextInt();
                scanner.nextLine();  // Limpiar buffer de nueva línea

                if (tipoListado == 1) {
                    gestionAlumnos.listadoPorGrupoAlumno(grupoListado);
                } else if (tipoListado == 2) {
                    gestionProfesores.listadoPorGrupoProfesor(grupoListado);
                } else {
                    System.out.println("Opción no válida.");
                }
            } else if (opcion == 0) { // Salir
                System.out.println("Saliendo...");
            } else {
                System.out.println("Opcion no valida.");
            }
        } while (opcion != 0);
    }
}


    

