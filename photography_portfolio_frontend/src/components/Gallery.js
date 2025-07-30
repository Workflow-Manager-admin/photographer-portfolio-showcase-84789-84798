import React from 'react';

const Gallery = () => {
  // Placeholder gallery items - in a real app, these would come from an API or CMS
  const galleryItems = [
    {
      id: 1,
      title: 'Wedding Photography',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Portrait Session',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c7e4ec3e?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Nature Photography',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Urban Lifestyle',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Family Moments',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Fashion Photography',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="gallery-section">
      <div className="container-wide">
        <h2>My Work</h2>
        <p>A collection of my favorite photographs across different genres and styles.</p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
