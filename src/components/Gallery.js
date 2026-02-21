import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1604908176965-3b3fd2b5cf8a?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606756794513-8f1f2b1b5c9c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop'
];

export default function Gallery(){
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {photos.map((src,i)=> (
            <div key={i} className="photo" style={{backgroundImage:`url(${src})`}} />
          ))}
        </div>
      </div>
    </section>
  )
}
