import React from 'react'

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      id: 1,
      title: 'Tuns clasic',
      price: '50 lei',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop',
      description: 'Tunsor clasică tradițională, perfectă pentru un look elegant și profesional.'
    },
    {
      id: 2,
      title: 'Fade / Modern',
      price: '70 lei',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop',
      description: 'Tunsor modernă cu fade, pentru un aspect contemporan și stilat.'
    },
    {
      id: 3,
      title: 'Barbă',
      price: '30 lei',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b7d?w=600&h=400&fit=crop',
      description: 'Tundere și modelare barbă profesională pentru un look îngrijit.'
    }
  ]

  return (
    <section className='services' id='services'>
      <div className='services-container'>
        <div className='services-header'>
          <h2 className='services-title'>Serviciile Noastre</h2>
          <p className='services-subtitle'>Oferim servicii premium de frizerie pentru fiecare stil</p>
        </div>
        
        <div className='services-grid'>
          {services.map((service) => (
            <div key={service.id} className='service-card'>
              <div className='service-image-wrapper'>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className='service-image'
                  loading='lazy'
                />
                <div className='service-overlay'></div>
              </div>
              <div className='service-content'>
                <h3 className='service-name'>{service.title}</h3>
                <p className='service-description'>{service.description}</p>
                <div className='service-price'>
                  <span className='price-amount'>{service.price}</span>
                </div>
                <button className='service-button' onClick={scrollToContact}>
                  Programează-te
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services