<template>
     <div class="contenedor-header">
      <header>
        <div class="logo">
          <a href="#">ALEXIS</a>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#inicio" onclick="seleccionar()">INICIO</a></li>
            <li><a href="#sobremi" onclick="seleccionar()">SOBRE MI</a></li>
            <li><a href="#skills" onclick="seleccionar()">HABILIDADES</a></li>
            <!-- <li><a href="#curriculum">CURRICULUM</a></li> -->
            <li><a href="#portfolio" onclick="seleccionar()">PORTAFOLIO</a></li>
            <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
          </ul>
        </nav>
        <div class="nav-responsive" onclick="mostrarOcultar()">
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>

</template>