<template>
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>Serviços - Denis Marques</title>
      <!--<link rel="stylesheet" href="styles.css" />-->
    </head>

    <body>
      <header>
        <div class="circle-photo">
          <!-- Coloque aqui sua foto com formato de círculo -->
        </div>
        <h1>Denis Marques</h1>
        <p class="descricao">
          Analista de Sistemas, Designer Gráfico e Suporte em TI
        </p>
        <!--
<p class="presentation">
          Formado em Análise e Desenvolvimento de Sistemas, Designer Gráfico e
          Suporte em TI.
        </p>
       -->
        <div class="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100013634430281&mibextid=ZbWKwL"
            target="_blank"
            ><i class="fab fa-facebook"></i
          ></a>
          <a
            href="https://www.instagram.com/dml_sys/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
            target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/denis-marques-771255105"
            target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
        </div>
      </header>
      <main>
        <section class="services">
          <h2>Serviços</h2>
          <div class="service">
            <i class="fas fa-laptop-code"></i>
            <!--<h3>Analista de Sistemas</h3>-->
            <a
              class="whatsapp-button"
              href="https://api.whatsapp.com/send?phone=+5562999856193&text=Gostaria de mais informações sobre desenvolvimento de sistemas."
              target="_blank"
              >Desenvolvimento de sistemas</a
            >
          </div>
          <div class="service">
            <i class="fas fa-paint-brush"></i>
            <!--<h3>Designer Gráfico</h3>-->
            <a
              class="whatsapp-button"
              href="https://api.whatsapp.com/send?phone=+5562999856193&text=Gostaria de mais informações sobre flyers para eventos."
              target="_blank"
              >Flyers para eventos</a
            >
          </div>
          <div class="service">
            <i class="fas fa-desktop"></i>
            <!--<h3>Suporte em TI</h3>-->
            <a
              class="whatsapp-button"
              href="https://api.whatsapp.com/send?phone=+5562999856193&text=Gostaria de mais informações sobre suporte em TI."
              target="_blank"
              >Suporte em TI</a
            >
          </div>
        </section>
      </main>
    </body>
  </html>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    document.title = "Denis Marques";
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f0f0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Definimos a altura mínima da página para 100% da altura da viewport */
  position: relative;
}
main {
  flex: 1;
}
header {
  background-color: #012840;
  color: #f2f0f0;
  text-align: center;
  padding: 20px;
}

header h1 {
  margin: 10px 0;
  margin-bottom: 0%;
}

.circle-photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-image: url("assets/imagens/LOGO_DENIS.png");
  background-size: cover;
  margin: 0 auto;
}
/* ... (código anterior) ... */

.services {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.descricao {
  font-size: small;
  margin-top: 0;
}
.services h2 {
  color: #03738c;
  width: 100%;
}

.service {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service i {
  font-size: 48px;
  color: #03738c;
}

.service h3 {
  color: #03738c;
  margin: 10px 0;
}

/* ... (código anterior) ... */

.whatsapp-button {
  width: 250px;
}
.social-icons a {
  color: #f2f0f0;
}
.social-icons {
  display: flex;
  justify-content: flex-end;
}

.social-icons a {
  margin-left: 10px;
}

.services {
  text-align: center;
  padding: 20px;
}

.services h2 {
  color: #03738c;
}

.services .service {
  margin: 20px;
}

.services .service img {
  width: 100px;
  height: 100px;
}

.whatsapp-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #50a0bf;
  color: #f2f0f0;
  text-decoration: none;
  margin-top: 10px;
  border-radius: 5px;
}
p {
  color: #f2f0f0;
  text-align: center;
  padding: 20px;
}
</style>
