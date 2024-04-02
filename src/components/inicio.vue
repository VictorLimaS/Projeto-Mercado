<template>
  <div class="content">
    <button class="nav-left"><ion-icon name="chevron-back-outline"></ion-icon></button>
    <img src="../assets/img/fotomercado1.jpg" alt="Imagem" />
    <button class="nav-right"><ion-icon name="chevron-forward-outline"></ion-icon></button>
  </div>
  <div class="information">
    <div class="info-item">
      <ion-icon name="home-outline"></ion-icon>
      <span>Entre em sua casa</span>
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
  <div>
    <h2>Melhores Ofertas</h2>
    <div class="card-row">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
      <div class="card">Card 5</div>
      <div class="card">Card 6</div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  overflow: hidden;
}

.content img {
  width: 100%;
  height: 30rem;
  z-index: -10;
}

.content button {
  position: absolute;
  top: calc(50% - -2rem);
  background-color: transparent;
  border: none;
  z-index: 1;
}


.nav-left {
  left: 10px;
}

.nav-right {
  right: 10px;
}

.content button ion-icon {
  color: #4c4c4c;
  font-size: 4rem;
  cursor: pointer;
}

.information {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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

.separator {
  border-left: 1px solid #000000;
  height: 50px;
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
}
</style>
