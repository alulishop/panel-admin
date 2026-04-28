document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('admin-user').value;
    const clave = document.getElementById('admin-pass').value;
    const info = document.getElementById('mensaje-error'); // Donde aparecerá el texto

    // Credenciales Master
    const MASTER_USER = "fabricio";
    const MASTER_PASS = "a1532ra777";

    if (usuario === MASTER_USER && clave === MASTER_PASS) {
        // EN VEZ DE ALERT:
        info.innerText = "¡Confirmado! Entrando...";
        info.className = "mensaje-alerta exito-text";
        
        // Espera medio segundo para que veas el mensaje y redirige
        setTimeout(() => {
            window.location.href = "https://alulishop.github.io/inventario-aluli/";
        }, 600);
        
    } else {
        // EN VEZ DE ALERT:
        info.innerText = "Usuario o clave incorrectos";
        info.className = "mensaje-alerta error-text";
        
        // El mensaje se quita solo después de 3 segundos
        setTimeout(() => {
            info.innerText = "";
        }, 3000);
    }
});