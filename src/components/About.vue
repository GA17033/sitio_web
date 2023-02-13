<template>
  <section id="sobremi" class="sobremi">
    <div class="contenido-seccion">
      <h2>Sobre Mí</h2>
      <p>
        <span>Hola, soy Alexis Garcia.</span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam unde soluta minima
        necessitatibus, voluptas consectetur vero officiis quas, explicabo
        deleniti repellendus aliquid debitis maiores numquam voluptate
        reprehenderit in delectus dolores.
      </p>

      <div class="row">
        <div class="col">
          <h3>Datos Personales</h3>
          <ul>
            <li>
              <strong>Cumpleaños</strong>
              1998-06-17
            </li>
            <li>
              <strong>Teléfono</strong>
              73455844
            </li>
            <li>
              <strong>Email</strong>
              alexis.garcia170698@gmail.com
            </li>
            <!-- <li>
                          <strong>Website</strong>
                          www.example.com
                      </li> -->
            <li>
              <strong>Dirección</strong>
              San Salvador, El salvador
            </li>
          </ul>
        </div>

        <div class="col">
          <h3>Intereses</h3>
          <div class="contenedor-intereses">
            <div class="interes">
              <i class="fa-solid fa-gamepad"></i>
              <span>JUEGOS</span>
            </div>
            <div class="interes">
              <i class="fa-solid fa-headphones"></i>
              <span>MUSICA</span>
            </div>

            <div class="interes">
              <i class="fa-solid fa-person-hiking"></i>
              <span>DEPORTE</span>
            </div>

            <div class="interes">
              <i class="fa-solid fa-camera"></i>
              <span>FOTOS</span>
            </div>
          </div>
        </div>
      </div>
      <router-link to='/pdf' id="pdf" class="button">
        PDF <i class="fa-solid fa-download"></i>
        <span class="overlay"></span>
      </router-link>
    </div>
  </section>
</template>