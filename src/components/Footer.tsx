export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">Turbo Ofertas Automotivas | Economia Inteligente para seu Carro</p>
      <p>
        Os preços, cupons e estoques são monitorados automaticamente e podem mudar a qualquer momento.
        Confira sempre as condições na loja antes de finalizar.
      </p>
      <p>
        Comunidade 100% gratuita. Este site pode receber comissões através de links de afiliados sem nenhum custo extra para você.
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} Turbo Ofertas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
