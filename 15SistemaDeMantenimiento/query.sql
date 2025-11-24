create database gestion_mantenimiento;
use gestion_mantenimiento;

CREATE TABLE averias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipo_id VARCHAR(50) NOT NULL,
    fecha_reporte DATETIME DEFAULT CURRENT_TIMESTAMP,
    sintoma TEXT NOT NULL,
    diagnostico TEXT,
    accion_correctiva TEXT,
    piezas_reemplazadas TEXT,
    tiempo_inactividad TIME,
    tecnico_responsable VARCHAR(100)
);

-- Averias de prueba
INSERT INTO averias (equipo_id, sintoma, diagnostico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad, tecnico_responsable) VALUES
('COMP-001', 'Motor no arranca - no hay respuesta al pulsador de inicio', 'Fallo en capacitor de arranque del motor principal', 'Reemplazo de capacitor de arranque de 50μF', 'Capacitor 50μF (P/N: CAP-50MF-001)', '02:30:00', 'Juan Pérez'),
('CNC-015', 'Ruido excesivo y vibración en eje Z durante operación', 'Rodamientos del husillo desgastados y falta de lubricación', 'Reemplazo de rodamientos y lubricación completa del husillo', 'Rodamiento 6205ZZ (2 unidades), Grasa NLGI #2', '04:15:00', 'María González'),
('HIDR-008', 'Fuga de aceite en cilindro principal y presión inconsistente', 'Juntas tóricas desgastadas en el vástago del cilindro', 'Reemplazo de juntas y sellos, purgado del sistema', 'Juntas tóricas kit #OR-45, Aceite ISO VG 46 (5L)', '03:00:00', 'Carlos Rodríguez'),
('NEUM-012', 'Pérdida de presión constante en línea principal', 'Válvula de retorno defectuosa en compresor auxiliar', 'Reemplazo de válvula de retorno y prueba de presión', 'Válvula de retorno VR-2050', '01:45:00', 'Ana Martínez'),
('PLC-003', 'Paros intermitentes sin alarmas en sistema de control', 'Tarjeta de E/S dañada por pico de voltaje', 'Reemplazo de tarjeta de entrada/salida y estabilizador', 'Tarjeta E/S DI-16/DO-16, Protector de sobretensión', '05:20:00', 'Roberto Sánchez');