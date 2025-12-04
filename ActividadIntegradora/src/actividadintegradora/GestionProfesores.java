/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package actividadintegradora;

import java.util.ArrayList;

class GestionProfesores {

    private ArrayList<Profesor> profesores;

    public GestionProfesores() {
        profesores = new ArrayList<>(); // Inicializamos la lista
    }
    public void agregarProfesor(Profesor profesor) {
        profesores.add(profesor);
        System.out.println("Profesor agregado exitosamente.");
    }
    public void eliminarProfesor(int numeroProfesor) {
        for (int i = 0; i < profesores.size(); i++) {
            if (profesores.get(i).getNumeroProfesor() == numeroProfesor) {
                profesores.remove(i);
                System.out.println("Profesor eliminado exitosamente.");
                return;
            }
        }
        System.out.println("Profesor no encontrado.");
    }
    public void modificarProfesor(int numeroProfesor, String nuevoNombre, String nuevaDireccion, float nuevoSueldo,
            String nuevoGrupo, String nuevoTurno, String nuevaEspecialidad) {
        for (Profesor profesor : profesores) {
            if (profesor.getNumeroProfesor() == numeroProfesor) {
                profesor.setNombre(nuevoNombre);
                profesor.setDireccion(nuevaDireccion);
                profesor.setSueldo(nuevoSueldo);
                profesor.setGrupo(nuevoGrupo);
                profesor.setTurno(nuevoTurno);
                profesor.setEspecialidad(nuevaEspecialidad);
                System.out.println("Profesor modificado exitosamente.");
                return;
            }
        }
        System.out.println("Profesor no encontrado.");
    }
    public void consultarProfesor(int numeroProfesor) {
        for (Profesor profesor : profesores) {
            if (profesor.getNumeroProfesor() == numeroProfesor) {
                System.out.println("Nombre: " + profesor.getNombre());
                System.out.println(", Direccion: " + profesor.getDireccion());
                System.out.println(", Sueldo: " + profesor.getSueldo());
                System.out.println(", Grupo: " + profesor.getGrupo());
                System.out.println(", Turno: " + profesor.getTurno());        
                System.out.println(", Especialidad: " + profesor.getEspecialidad());
                return;
            }
        }
        System.out.println("Profesor no encontrado.");
    }
    // Nuevo método para listar los profesores de un grupo
    public void listadoPorGrupoProfesor(String grupo) {
        boolean encontrado = false;
        for (Profesor profesor : profesores) {
            if (profesor.getGrupo().equals(grupo)) {
                System.out.println("Profesor: " + profesor.getNombre());  
                System.out.println(",Número de Profesor: " + profesor.getNumeroProfesor());
                System.out.println(", Sueldo: " + profesor.getSueldo()); 
                System.out.println(", Turno: " + profesor.getTurno());
                System.out.println(", Especialidad: " + profesor.getEspecialidad());
                encontrado = true;
            }
        }
        if (!encontrado) {
            System.out.println("No hay profesores en el grupo " + grupo + ".");
        }
    }
}



    

