function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Mostrar la primera sección por defecto
document.addEventListener('DOMContentLoaded', () => {
    showSection('promocion-marketing');
});
