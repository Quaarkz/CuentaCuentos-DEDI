document.getElementById('btnLeer').addEventListener('click', function() {
    // Obtener el texto del textarea
    const texto = document.getElementById('texto').value;

    // Comprobar si el texto no está vacío
    if (texto.trim() !== '') {
        // Crear un nuevo objeto SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(texto);
        
        // Configurar la voz (opcional)
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'es-ES') || null;

        // Iniciar la síntesis de voz
        speechSynthesis.speak(utterance);
    } else {
        alert("Por favor, introduce un texto para leer.");
    }
});