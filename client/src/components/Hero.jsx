import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='hero'>
      <div className='hero-background'>
        <div className='hero-gradient'></div>
        <div className='hero-pattern'></div>
        <div className='hero-shapes'>
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
        </div>
      </div>
      
      <div className='hero-container'>
        <div className='hero-content'>
          <div className='hero-badge'>
            <span className='badge-text'>✨ Experiență Premium</span>
          </div>
          
          <h1 className='hero-title'>
            <span className='title-line'>Barber Studio</span>
            <span className='title-line title-accent'>Ploiești</span>
          </h1>
          
          <p className='hero-subtitle'>
            Tunsori moderne. Programări rapide.
          </p>
          
          <p className='hero-description'>
            Transformă-ți stilul cu serviciile noastre premium de frizerie. 
            Experiență de top într-un mediu modern și relaxant.
          </p>
          
          <div className='hero-actions'>
            <button className='hero-cta hero-cta-primary' onClick={scrollToContact}>
              <span>Programează-te</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className='hero-cta hero-cta-secondary'>
              <span>Vezi Serviciile</span>
            </button>
          </div>
          
          <div className='hero-stats'>
            <div className='stat-item'>
              <div className='stat-number'>500+</div>
              <div className='stat-label'>Clienți Mulțumiți</div>
            </div>
            <div className='stat-divider'></div>
            <div className='stat-item'>
              <div className='stat-number'>5★</div>
              <div className='stat-label'>Rating Mediu</div>
            </div>
            <div className='stat-divider'></div>
            <div className='stat-item'>
              <div className='stat-number'>10+</div>
              <div className='stat-label'>Ani Experiență</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='hero-scroll-indicator'>
        <div className='scroll-mouse'>
          <div className='scroll-wheel'></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero