
package actividadintegradora;

import java.util.ArrayList;

class GestionAlumnos {
    private ArrayList<Alumno> alumnos;
    public GestionAlumnos() {
        alumnos = new ArrayList<>(); // Inicializamos la lista
    }
    public void agregarAlumno(Alumno alumno) {
        alumnos.add(alumno);
        System.out.println("Alumno agregado exitosamente.");
    }
    public void eliminarAlumno(int numeroBoleta) {
        for (int i = 0; i < alumnos.size(); i++) {
            if (alumnos.get(i).getNumeroBoleta() == numeroBoleta) {
                alumnos.remove(i);
                System.out.println("Alumno eliminado exitosamente.");
                return;
            }
        }
        System.out.println("Alumno no encontrado.");
    }
    public void modificarAlumno(int numeroBoleta, String nuevoNombre, 
            String nuevaDireccion, String nuevoGrupo, float nuevoGenero) {
        for (Alumno alumno : alumnos) {
            if (alumno.getNumeroBoleta() == numeroBoleta) {
                alumno.setNombre(nuevoNombre);
                alumno.setDireccion(nuevaDireccion);
                alumno.setGrupo(nuevoGrupo);
                alumno.setGenero(nuevoGenero);
                System.out.println("Alumno modificado exitosamente.");
                return;
            }
        }
        System.out.println("Alumno no encontrado.");
    }
    public void consultarAlumno(int numeroBoleta) {
        for (Alumno alumno : alumnos) {
            if (alumno.getNumeroBoleta() == numeroBoleta) {
                System.out.println("Nombre: " + alumno.getNombre());
                System.out.println(", Direccion: " + alumno.getDireccion());
                System.out.println(", Grupo: " + alumno.getGrupo());
                System.out.println(", Genero: " + (alumno.getGenero() == 0 ? "Masculino" : "Femenino"));
                return;
            }
        }
        System.out.println("Alumno no encontrado.");
    }
    // Nuevo método para listar los alumnos de un grupo
    public void listadoPorGrupoAlumno(String grupo) {
        boolean encontrado = false;
        for (Alumno alumno : alumnos) {
            if (alumno.getGrupo().equals(grupo)) {
                System.out.println("Alumno: " + alumno.getNombre());  
                System.out.println(", Número de Boleta: " + alumno.getNumeroBoleta());
                System.out.println(", Genero: " + (alumno.getGenero() == 0 ? "Masculino" : "Femenino"));
                encontrado = true;
            }
        }
        if (!encontrado) {
            System.out.println("No hay alumnos en el grupo " + grupo + ".");
        }
    }
}
