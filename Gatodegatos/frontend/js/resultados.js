document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const row = this.closest('tr');
            
            if (confirm('¿Borrar este resultado?')) {
                this.disabled = true;
                this.textContent = 'Borrando...';
                
                fetch(`/api/resultados/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        row.remove();
                        actualizarEstadisticas();
                        alert('Borrado');
                    } else {
                        alert('Error: ' + data.error);
                        this.disabled = false;
                        this.textContent = 'Eliminar';
                    }
                })
                .catch(() => {
                    alert('Error de conexión');
                    this.disabled = false;
                    this.textContent = 'Eliminar';
                });
            }
        });
    });
});

function actualizarEstadisticas() {
    const filas = document.querySelectorAll('.results-table tbody tr');
    const total = filas.length;
    
    const victoriasX = document.querySelectorAll('.winner-badge.winner-x').length;
    const victoriasO = document.querySelectorAll('.winner-badge.winner-o').length;
    const empates = document.querySelectorAll('.winner-badge.winner-tie').length;
    
    const badgeTotal = document.querySelector('.badge');
    if (badgeTotal) badgeTotal.textContent = total;
    
    const xWinsElement = document.querySelector('.x-wins');
    const oWinsElement = document.querySelector('.o-wins');
    const tiesElement = document.querySelector('.ties');
    
    if (xWinsElement) xWinsElement.textContent = victoriasX;
    if (oWinsElement) oWinsElement.textContent = victoriasO;
    if (tiesElement) tiesElement.textContent = empates;
    
    if (total === 0) {
        const tabla = document.querySelector('.table-container');
        const estadisticas = document.querySelector('.stats');
        const estadoVacio = document.querySelector('.empty-state');
        
        if (tabla) tabla.style.display = 'none';
        if (estadisticas) estadisticas.style.display = 'none';
        if (estadoVacio) estadoVacio.style.display = 'block';
    }
}