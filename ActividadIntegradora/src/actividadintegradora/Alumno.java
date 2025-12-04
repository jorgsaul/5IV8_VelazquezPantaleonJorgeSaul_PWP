/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package actividadintegradora;

public class Alumno {
   
    private int numeroBoleta;
    private String nombre;
    private String direccion;
    private String grupo;
    private float genero;

    public float getGenero() {
        return genero;
    }
    public void setGenero(float genero) {
        this.genero = genero;
    }
    
    public int getNumeroBoleta() {
        return numeroBoleta;
    }
    public void setNumeroBoleta(int numeroBoleta) {
        this.numeroBoleta = numeroBoleta;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getGrupo() {
        return grupo;
    }
    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }
}
