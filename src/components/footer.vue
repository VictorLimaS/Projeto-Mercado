<template>
  <div class="footer">
    <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
    <div class="info">
      <h3>Menu</h3>
      <p>Ofertas</p>
      <p>Mais Comprados</p>
      <p>Para Festas</p>
      <p>Seu Negocio</p>
      <p>Atacadista</p>
    </div>
    <div class="info">
      <h3>Info</h3>
      <p>Sobre Nós</p>
      <p>Atendimento ao Cliente</p>
      <p>Locias</p>
      <p>Entregas e Devoluções</p>
      <p>Termos e Condições</p>
      <p>Métodos de Pagamento</p>
      <p>Política de Cookies</p>
    </div>
    <div class="info">
      <h3>Meu Favoritos</h3>
      <p>Favoritos</p>
      <p>Pedidos</p>
    </div>
  </div>
  <div class="direitos">
    <div class="direito">
      <p>Local © 2024 Todos os direitos reservados, Desenvolvido por Victor Lima </p>
    </div>
    <div class="adicionais">
      <p>CNPJ: 00.000.000/0000-00</p>
      <P>Rua rua, 000 - cidade São Paulo - SP, 00000-000</P>
      <p>info@meuemail.com</p>
      <p>Telefone: (00) 0000-0000</p>
    </div>
    <div class="pagamentos">
      <p>Métodos de Pagamentos Aceitos</p>
      <img src="../assets/img/bandeiras.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  gap: 10rem;
  background-color: #FA9B2D;
  bottom: 0;
  margin-top: 5rem;
  padding: 50px 10px ;
}

.footer .logo img {
  width: 10rem;
}

.footer .info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
}

.footer .info p {
  cursor: pointer;
  height: 20px;
}

.footer .info p:hover {
  transition: .5s;
  border-bottom: 1px solid #fff;
}

.footer .info h3 {
  margin-bottom: 2rem;
  font-size: 25px;
}

.direitos {
  display: flex;
  padding: 50px 20px;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}

.direitos .pagamentos img {
  width: 20rem;
}
</style>

