<template>
    <section class="contacto" id="contacto">
      <div class="contenido-seccion">
        <h2>CONTACTO</h2>
        <div class="row">
          <div class="col">
            <input type="text" placeholder="Tu Nombre" />
            <input type="text" placeholder="Numero Telefonico" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Tema" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <button>
              Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>
              <span class="overlay"></span>
            </button>
          </div>
          <div class="col">
            <img src="../assets/img/ubicacion.png" alt="" />
            <div class="info">
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  Direccion: El salvador San Salvador , San Salvador
                </li>
                <li>
                  <i class="fa-solid fa-mobile"></i>
                  Telefono: 73455844
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  Email: alexis.garcia170698@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>