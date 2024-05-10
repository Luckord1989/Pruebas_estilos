<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Prueba</title>
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
</head>

<body>    
    <div class="nav">
        <ul class="list">
            <div class="list__item">
                <li class="list__button">
                    <img src="icons/menu.svg" alt="" class="list__icon">
                    <a href="#" class="nav__link">Inicio</a>
                </li>
            </div>
            
            <div class="list__item list__item--click">
                <li class="list__button list__button--click">
                    <img src="icons/servicio.svg" alt="" class="list__icon">
                    <a href="#" class="nav__link">Servicios</a>
                    <img src="icons/arrow.svg" alt="" class="list__arrow">
                </li>
                <ul class="list__show">
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                </ul>
            </div>

            <div class="list__item">
                <li class="list__button">
                    <img src="icons/complemento.svg" alt="" class="list__icon">
                    <a href="#" class="nav__link">Nosotros</a>
                </li>
            </div>

            <div class="list__item list__item--click">
                <li class="list__button list__button--click">
                    <img src="icons/servicio.svg" alt="" class="list__icon">
                    <a href="#" class="nav__link">Servicios</a>
                    <img src="icons/arrow.svg" alt="" class="list__arrow">
                </li>
                <ul class="list__show">
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                    <li class="list__inside">
                        <a href="" class="nav__link nav__link--inside">Servicio</a>
                    </li>
                </ul>
            </div>
     
        </ul>
    </div>   
    <script src="efectos.js"></script>     
<body>
    <div id="header">
        <div id="titulo">
            <h1>PHP SOLUCIONES</h1>
        </div>
        <div id="barra-movil">
            <a href="" id="boton-barra-movil">
                <div class="sub-barra"></div>
                <div class="sub-barra"></div>
                <div class="sub-barra"></div>
            </a>
        </div>
        <div id="nav">
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Catalogo</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </div>
    </div>
    <script src="efectos.js"></script>
</body>

</html>