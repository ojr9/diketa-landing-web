import Image from "next/image";

import GoogleSignupButton from "../components/GoogleSignupButton";
import type { LandingContent } from "../lib/landing-content";
import type { LandingImage } from "../lib/landing-images";

function ImageFrame({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  image: LandingImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={`image-frame ${className}`}>
      <Image
        alt={image.alt}
        className="image-frame__image"
        fill
        priority={priority}
        sizes={sizes}
        src={image.src}
      />
    </figure>
  );
}

function CtaButtons({ content }: { content: LandingContent }) {
  return (
    <div className="cta-row">
      <a className="button button--primary" href="#waiting-list">
        {content.cta.primary}
      </a>
      <a className="button button--secondary" href="#how-it-works">
        {content.cta.secondary}
      </a>
    </div>
  );
}

function LanguageSwitcher({
  content,
  className = "",
}: {
  content: LandingContent;
  className?: string;
}) {
  return (
    <div className={`language-switcher ${className}`} role="group" aria-label={content.language.ariaLabel}>
      {content.language.options.map((option) =>
        option.current ? (
          <span aria-current="true" key={option.href}>
            {option.label}
          </span>
        ) : (
          <a href={option.href} hrefLang={option.hrefLang} key={option.href}>
            {option.label}
          </a>
        ),
      )}
    </div>
  );
}

export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={content.header.homeAriaLabel}>
          {content.brand}
        </a>
        <nav className="desktop-nav" aria-label={content.header.navigationAriaLabel}>
          {content.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher content={content} className="header-language" />
        <a className="button button--primary header-cta" href="#waiting-list">
          {content.cta.primary}
        </a>
        <details className="mobile-menu">
          <summary aria-label={content.header.mobileMenuAriaLabel}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>
          <nav aria-label={content.header.mobileNavigationAriaLabel}>
            {content.navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <LanguageSwitcher content={content} className="menu-language" />
            <a className="button button--primary" href="#waiting-list">
              {content.cta.primary}
            </a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <ImageFrame
          className="hero__image"
          image={content.hero.image}
          priority
          sizes="100vw"
        />
        <div className="hero__shade" />
        <div className="hero__content page-wrap">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 id="hero-title">{content.hero.title}</h1>
          <p>{content.hero.body}</p>
          <CtaButtons content={content} />
          <p className="reassurance-line">{content.hero.reassurance}</p>
        </div>
      </section>

      <section className="section section--compact reassurance" aria-labelledby="reassurance-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">{content.reassurance.eyebrow}</p>
            <h2 id="reassurance-title">{content.reassurance.title}</h2>
          </div>
          <div className="reassurance-grid">
            {content.reassurance.cards.map((card) => (
              <article className={`mini-card mini-card--${card.accent}`} key={card.title}>
                <span className="mini-card__mark" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section" id="why-diketa" aria-labelledby="problem-title">
        <div className="page-wrap split-section__grid">
          <div>
            <p className="eyebrow">{content.problem.eyebrow}</p>
            <h2 id="problem-title">{content.problem.title}</h2>
            {content.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ImageFrame image={content.problem.image} sizes="(max-width: 768px) 100vw, 42vw" />
        </div>
      </section>

      <section className="section solution" aria-labelledby="solution-title">
        <div className="page-wrap">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">{content.solution.eyebrow}</p>
            <h2 id="solution-title">{content.solution.title}</h2>
            <p>{content.solution.body}</p>
          </div>
          <div className="feature-grid">
            {content.solution.cards.map((card) => (
              <article className={`feature-card feature-card--${card.tone}`} key={card.title}>
                <span className="feature-card__visual" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section how" id="how-it-works" aria-labelledby="how-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">{content.howItWorks.eyebrow}</p>
            <h2 id="how-title">{content.howItWorks.title}</h2>
          </div>
          <div className="steps-grid">
            {content.howItWorks.steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <ImageFrame image={step.image} sizes="(max-width: 768px) 100vw, 30vw" />
                <span className="step-card__number">
                  {content.howItWorks.stepLabel} {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experts" id="experts" aria-labelledby="experts-title">
        <div className="page-wrap">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">{content.experts.eyebrow}</p>
            <h2 id="experts-title">{content.experts.title}</h2>
            <p>{content.experts.body}</p>
          </div>
          <div className="expert-grid">
            {content.experts.cards.map((expert, index) => (
              <article className="expert-card" key={`${expert.label}-${index}`}>
                <ImageFrame image={expert.image} sizes="(max-width: 768px) 100vw, 24vw" />
                <div>
                  <p className="expert-card__label">{expert.label}</p>
                  <h3>{expert.specialty}</h3>
                  <p>{expert.location}</p>
                  <span>{expert.trust}</span>
                </div>
                <a className="text-link" href="#waiting-list">
                  {expert.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section story" aria-labelledby="story-title">
        <div className="page-wrap story__grid">
          <ImageFrame image={content.story.image} sizes="(max-width: 768px) 100vw, 48vw" />
          <div>
            <p className="eyebrow">{content.story.eyebrow}</p>
            <h2 id="story-title">{content.story.title}</h2>
            {content.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience" aria-labelledby="audience-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">{content.audience.eyebrow}</p>
            <h2 id="audience-title">{content.audience.title}</h2>
          </div>
          <div className="audience-grid">
            {content.audience.cards.map((card) => (
              <article className="audience-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-detail" aria-labelledby="product-title">
        <div className="page-wrap product-detail__grid">
          <div>
            <p className="eyebrow">{content.product.eyebrow}</p>
            <h2 id="product-title">{content.product.title}</h2>
            <div className="detail-list">
              {content.product.details.map((item) => (
                <article key={item.feature}>
                  <h3>{item.feature}</h3>
                  <p>{item.benefit}</p>
                </article>
              ))}
            </div>
          </div>
          <ImageFrame image={content.product.image} sizes="(max-width: 768px) 100vw, 46vw" />
        </div>
      </section>

      <section className="section credibility" aria-labelledby="credibility-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">{content.credibility.eyebrow}</p>
            <h2 id="credibility-title">{content.credibility.title}</h2>
          </div>
          <div className="credibility-grid">
            {content.credibility.cards.map((card) => (
              <article className="credibility-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="testimonial-grid" aria-label={content.credibility.testimonialsAriaLabel}>
            {content.credibility.testimonials.map((quote) => (
              <blockquote key={quote}>{quote}</blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="page-wrap faq__grid">
          <div>
            <p className="eyebrow">{content.faq.eyebrow}</p>
            <h2 id="faq-title">{content.faq.title}</h2>
          </div>
          <div className="faq-list">
            {content.faq.items.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta" id="waiting-list" aria-labelledby="final-title">
        <div className="page-wrap final-cta__panel">
          <div>
            <p className="eyebrow">{content.finalCta.eyebrow}</p>
            <h2 id="final-title">{content.finalCta.title}</h2>
            <p>{content.finalCta.body}</p>
            <div>{content.finalCta.googleSignup && <GoogleSignupButton />}</div>
            <p className="reassurance-line">{content.finalCta.reassurance}</p>
          </div>
          <ImageFrame image={content.finalCta.image} sizes="(max-width: 768px) 100vw, 34vw" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-wrap site-footer__grid">
          <div>
            <a className="wordmark" href="#top">
              {content.brand}
            </a>
            <p>{content.footer.tagline}</p>
          </div>
          <nav aria-label={content.footer.navigationAriaLabel}>
            {content.navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher content={content} className="footer-language" />
          <p className="copyright">{content.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
