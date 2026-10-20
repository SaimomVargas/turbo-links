export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">Turbo Ofertas Automotivas | Economia Inteligente para seu Veículo</p>
      <p>
        <strong>Como funciona:</strong> Nossa curadoria e inteligência artificial monitoram bugs de preço, cupons escondidos e promoções relâmpago 24 horas por dia na Shopee e grandes marketplaces.
      </p>
      <p>
        <strong>Transparência:</strong> O acesso aos grupos e ao bot é 100% gratuito. Participamos de programas de afiliados e podemos receber uma comissão caso você realize compras através dos links indicados, sem nenhum custo extra para você. Preços e estoques estão sujeitos a alteração pelas lojas parceiras.
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} Turbo Ofertas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
