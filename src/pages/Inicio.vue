<template>
  <div class="content">
    <button class="nav-left"><ion-icon name="chevron-back-outline"></ion-icon></button>
    <img src="../assets/img/mercado.jpg" alt="Imagem" />
    <button class="nav-right"><ion-icon name="chevron-forward-outline"></ion-icon></button>
  </div>
  <div class="information">
    <div class="info-item">
      <ion-icon name="home-outline"></ion-icon>
      <span>Entregamos em sua casa</span>
    </div>
    <div class="separator"></div>
    <div class="info-item">
      <ion-icon name="location-outline"></ion-icon>
      <span>Retirada no local</span>
    </div>
    <div class="separator"></div>
    <div class="info-item">
      <ion-icon name="time-outline"></ion-icon>
      <span>Atendimento rápido</span>
    </div>
    <div class="separator"></div>
    <div class="info-item">
      <ion-icon name="globe-outline"></ion-icon>
      <span>Peça online</span>
    </div>
  </div>
  <h2>Melhores Ofertas</h2>
  <div class="card-row">
    <div class="card"><img src="../assets/img/1.jpg" alt=""></div>
    <div class="card"><img src="../assets/img/2.jpg" alt=""></div>
    <div class="card"><img src="../assets/img/3.jpg" alt=""></div>
    <div class="card"><img src="../assets/img/4.jpg" alt=""></div>
    <div class="card"><img src="../assets/img/5.jpg" alt=""></div>
    <div class="card"><img src="../assets/img/6.jpg" alt=""></div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  height: 600px;
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.content img {
  width: 100%;
  height: 30rem;
}

.content button {
  position: absolute;
  color: #fff;
  font-size: 4rem;
  top: calc(50% - 1rem);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.content button ion-icon {
  border-radius: 50%;
}

.content button ion-icon:hover {
  transition: .7s;
  background-color: #fa9a2d84;
}

.nav-left {
  left: 10px;
}

.nav-right {
  right: 10px;
}

.information {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.info-item ion-icon {
  margin-right: 10px;
  font-size: 2rem;
  color: #FA9B2D;
}

h2 {
  font-size: 2rem;
  margin-left: 4rem;
  margin-top: 5rem
}

.separator {
  border-left: 1px solid #000000;
  height: 70px;
  margin: 0 10px;
}

.card-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
}

.card {
  width: 220px;
  height: 280px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  cursor: pointer;
}

.card-row .card img {
  width: 220px;
  height: 280px;
}
</style>
