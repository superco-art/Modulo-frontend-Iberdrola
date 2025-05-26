const appDiv = document.getElementById('app');

const navigationLinks = document.getElementById('navigation').querySelectorAll('a');

function homePage() {
    return `<h1>Bienvenido a la página de inicio</h1><p>Este es el contenido de la página principal.</p>
    <div class="home-container">
            <h1>Bienvenido a nuestra increíble aplicación</h1>
            <p>Aquí encontrarás información interesante y funcionalidades geniales.</p>
            <ul>
                <li>Primer punto importante</li>
                <li>Segundo punto relevante</li>
            </ul>
            <button onclick="alert('¡Has hecho clic!')">Haz clic aquí</button>
        </div>
    `;
}

function aboutPage() {
    return `<h1>Acerca de</h1><p>Información sobre nuestra aplicación.</p>
    <div class="about-section">
            <h2>Acerca de Nosotros</h2>
            <p>Somos un equipo apasionado por la creación de experiencias web innovadoras.</p>
            <img src="imagen-equipo.jpg" alt="Nuestro equipo" width="200">
            <p>Nuestra misión es...</p>
        </div>`;
}

function contactPage() {
    return `<h1>Contacto</h1><p>Puedes contactarnos en...</p>
     <div class="contact-form">
            <h2>Contáctanos</h2>
            <form>
                <label for="nombre">Nombre:</label><br>
                <input type="text" id="nombre" name="nombre"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <textarea name="mensaje" rows="5" cols="30">Escribe tu mensaje aquí...</textarea><br><br>
                <input type="submit" value="Enviar">
            </form>
            <p>También puedes encontrarnos en nuestras redes sociales: <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
        </div>`;
}


    function loadContent(page) {
        switch (page) {
            case 'home':
                appDiv.innerHTML = homePage();
                break;
            case 'about':
                appDiv.innerHTML = aboutPage();
                break;
            case 'contact':
                appDiv.innerHTML = contactPage();
                break;
            default:
                appDiv.innerHTML = '<h1>Página no encontrada</h1>';
        }
    }
    
    function handleNavigation() {
        const hash = window.location.hash.substring(1); // Obtiene la parte de la URL después del #
        loadContent(hash);
    }

    // Carga el contenido inicial al cargar la página (por defecto, la página de inicio)
    if (!window.location.hash) {
        window.location.hash = '#home';
    }
    handleNavigation();

    // Escucha los cambios en el hash de la URL para la navegación
    window.addEventListener('hashchange', handleNavigation);