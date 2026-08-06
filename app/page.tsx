const whatsappUrl =
  "https://wa.me/554399339823?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20gratuita.";

const discounts = [
  { number: "01", title: "Associações", text: "Cobranças de entidades ou serviços associativos." },
  { number: "02", title: "Mensalidades", text: "Débitos recorrentes que você não reconhece." },
  { number: "03", title: "Seguros", text: "Contratações não autorizadas ou desconhecidas." },
  { number: "04", title: "Empréstimos", text: "Parcelas e operações que exigem conferência." },
  { number: "05", title: "Tarifas", text: "Valores cobrados sem a devida clareza." },
  { number: "06", title: "Outros descontos", text: "Qualquer débito que você não tenha autorizado." },
];

const differentials = [
  { number: "01", title: "Atendimento humanizado", text: "Você conversa com pessoas de verdade, sem respostas prontas." },
  { number: "02", title: "Especialistas no assunto", text: "Uma equipe que conhece descontos em benefícios." },
  { number: "03", title: "Análise personalizada", text: "O seu caso é analisado com atenção, um por um." },
  { number: "04", title: "Transparência em cada etapa", text: "Você sempre sabe o que está acontecendo." },
  { number: "05", title: "Suporte via WhatsApp", text: "Fale com nossa equipe de forma simples e rápida." },
];

const testimonials = [
  {
    quote: "Fui atendida com muita calma e consegui entender cada etapa da análise.",
    name: "Maria A.",
    detail: "Aposentada · exemplo ilustrativo",
  },
  {
    quote: "A equipe explicou tudo de forma simples e manteve contato durante o processo.",
    name: "Antônio R.",
    detail: "Pensionista · exemplo ilustrativo",
  },
  {
    quote: "Me senti respeitada e segura para tirar todas as minhas dúvidas.",
    name: "Lúcia M.",
    detail: "Aposentada · exemplo ilustrativo",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Máxima Assessoria — início">
            <img className="brand-symbol" src="/brand/maxima-symbol.png" alt="" width="586" height="611" />
            <img className="brand-wordmark" src="/brand/maxima-wordmark.png" alt="Máxima Assessoria" width="848" height="248" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#descontos">O que analisamos</a>
            <a href="#diferenciais">Por que a Máxima</a>
          </nav>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
            Falar no WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Assessoria especializada</p>
            <h1>Você pode estar perdendo dinheiro todos os meses sem perceber.</h1>
            <p className="hero-lead">
              A Máxima analisa descontos que você não reconhece e ajuda a buscar o
              dinheiro que é seu — com clareza e segurança.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Analisar meu benefício grátis <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#como-funciona">
                Entenda em 3 passos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="trust-row" aria-label="Diferenciais do atendimento">
              <span><i aria-hidden="true">✓</i> Grátis para começar</span>
              <span><i aria-hidden="true">✓</i> Atendimento humano</span>
              <span><i aria-hidden="true">✓</i> Tudo explicado com clareza</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <img
              src="/maxima-casal-hero.png"
              alt="Casal de idosos tranquilo em sua casa"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <div className="image-seal">
              <span className="seal-icon" aria-hidden="true">
                <img src="/brand/maxima-symbol.png" alt="" width="586" height="611" />
              </span>
              <span><small>Atendimento</small><strong>Seguro e próximo</strong></span>
            </div>
            <p className="image-caption">Cuidado com o que é seu.</p>
          </div>
        </div>
      </section>

      <section className="statement-strip" aria-label="Compromisso da Máxima Assessoria">
        <div className="container statement-grid">
          <p>Clareza para você.</p>
          <span aria-hidden="true" />
          <p>Cuidado em cada etapa.</p>
          <span aria-hidden="true" />
          <p>Segurança do início ao fim.</p>
        </div>
      </section>

      <section className="section process-section" id="como-funciona">
        <div className="container process-layout">
          <div className="section-intro sticky-intro">
            <p className="eyebrow"><span /> Como funciona</p>
            <h2>Um processo claro, do início ao fim.</h2>
            <p>Você fala com uma pessoa de verdade. Nós analisamos com cuidado e explicamos tudo sem palavras difíceis.</p>
          </div>
          <ol className="process-list">
            <li>
              <span className="step-number">01</span>
              <div><h3>Análise gratuita</h3><p>Você envia as informações e nós analisamos seu benefício sem custo.</p></div>
            </li>
            <li>
              <span className="step-number">02</span>
              <div><h3>Conferência dos descontos</h3><p>Conferimos cada desconto e mostramos o que pode estar errado.</p></div>
            </li>
            <li>
              <span className="step-number">03</span>
              <div><h3>Busca pelo seu dinheiro</h3><p>Buscamos recuperar o dinheiro que é seu. Se for preciso, cuidamos também de toda a parte jurídica.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-soft" id="descontos">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> O que analisamos</p>
              <h2>Descontos que merecem a sua atenção.</h2>
            </div>
            <p>Se um valor aparece no seu benefício e você não reconhece, vale a pena analisar.</p>
          </div>
          <div className="discount-grid">
            {discounts.map((item, index) => (
              <article className={`discount-card discount-card-${index + 1}`} key={item.number}>
                <div className="card-top"><span>{item.number}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <p>Não sabe qual é o desconto? Nós ajudamos você a conferir.</p>
            <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero tirar uma dúvida <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="diferenciais">
        <div className="container">
          <div className="dark-heading">
            <p className="eyebrow light"><span /> Por que escolher a Máxima</p>
            <h2>Confiança se constrói em cada detalhe.</h2>
            <p>Trabalho responsável, comunicação clara e respeito por cada história.</p>
          </div>
          <div className="differentials-grid">
            {differentials.map((item, index) => (
              <article className={`differential-card ${index === 0 ? "featured" : ""}`} key={item.number}>
                <span className="diff-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <div className="legal-trust">
            <span className="legal-monogram" aria-hidden="true">M</span>
            <p><strong>Atuação responsável.</strong> Cada caso é analisado com cuidado, sem promessas que não podem ser garantidas.</p>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="depoimentos">
        <div className="container">
          <div className="section-heading testimonials-heading">
            <div>
              <p className="eyebrow"><span /> Experiências</p>
              <h2>Atendimento que acolhe e esclarece.</h2>
            </div>
            <div className="temporary-label">Conteúdo demonstrativo</div>
          </div>
          <p className="temporary-note">
            Os depoimentos abaixo são exemplos temporários de composição e serão substituídos por relatos reais, mediante autorização.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.name}>
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">{item.name.charAt(0)}</span>
                  <span><strong>{item.name}</strong><small>{item.detail}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow light"><span /> Análise inicial gratuita</p>
            <h2>Descubra sem custo se há dinheiro a recuperar.</h2>
          </div>
          <div className="cta-action">
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero verificar meu benefício <span aria-hidden="true">→</span>
            </a>
            <small>Fale agora com uma pessoa da nossa equipe.</small>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a className="brand brand-light" href="#inicio" aria-label="Máxima Assessoria — voltar ao início">
              <img className="footer-logo" src="/brand/maxima-logo-transparent.png" alt="Máxima Assessoria" width="848" height="901" />
            </a>
            <p>Segurança, transparência e cuidado com o que é seu.</p>
          </div>
          <div className="footer-column">
            <h3>Institucional</h3>
            <a href="#como-funciona">Como funciona</a>
            <a href="#descontos">O que analisamos</a>
            <a href="#diferenciais">Por que a Máxima</a>
            <a href="#depoimentos">Depoimentos</a>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">(43) 9933-9823</a>
            <span>Atendimento via WhatsApp</span>
          </div>
          <div className="footer-column">
            <h3>Redes sociais</h3>
            <span>Instagram · em breve</span>
            <span>Facebook · em breve</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Máxima Assessoria. Todos os direitos reservados.</p>
          <p>CNPJ 56.991.091/0001-29</p>
        </div>
      </footer>

      <a className="mobile-whatsapp-bar" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span><small>WhatsApp · análise gratuita</small>Falar com a Máxima</span>
        <i aria-hidden="true">→</i>
      </a>
    </main>
  );
}
