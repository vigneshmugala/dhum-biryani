import React, {useEffect, useRef, useState} from 'react';

const photos = [
  'https://images.unsplash.com/photo-1604908176965-3b3fd2b5cf8a?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606756794513-8f1f2b1b5c9c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543352634-2f6ee7c2a2d3?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-8d6f5a2b3c1f?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516685018646-5491b3f4b26b?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543352634-2f6ee7c2a2d3?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604908176965-3b3fd2b5cf8a?w=1200&q=80&auto=format&fit=crop'
];

export default function CarouselGallery(){
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const isDown = useRef(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(()=>{
    function onResize(){
      const w = window.innerWidth;
      if(w < 600) setItemsPerView(1);
      else if(w < 900) setItemsPerView(2);
      else if(w < 1200) setItemsPerView(3);
      else setItemsPerView(4);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return ()=> window.removeEventListener('resize', onResize);
  },[]);

  const totalSlides = Math.max(1, Math.ceil(photos.length / itemsPerView));

  useEffect(()=>{
    const id = setInterval(()=>{
      setIndex(i => (i + 1) % totalSlides);
    },3000);
    return ()=> clearInterval(id);
  },[itemsPerView, totalSlides]);

  function prev(){ setIndex(i => (i - 1 + totalSlides) % totalSlides); }
  function next(){ setIndex(i => (i + 1) % totalSlides); }

  function onPointerDown(e){
    isDown.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function onPointerUp(e){
    if(!isDown.current) return;
    isDown.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = endX - startX.current;
    const threshold = 40; // px
    if(dx > threshold) prev();
    else if(dx < -threshold) next();
  }

  function openLightbox(i){ setLightboxIndex(i); }
  function closeLightbox(){ setLightboxIndex(-1); }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="carousel">
          <button className="carousel-btn left" onClick={prev} aria-label="Prev">‹</button>
          <div className="carousel-viewport" onTouchStart={onPointerDown} onTouchEnd={onPointerUp} onMouseDown={onPointerDown} onMouseUp={onPointerUp}>
            <div className="carousel-track" ref={trackRef} style={{transform:`translateX(-${index * 100}%)`}}>
              {photos.map((src,i)=> (
                <div key={i} className="carousel-item" role="button" tabIndex={0} onClick={()=>openLightbox(i)} onKeyDown={(e)=>{ if(e.key==='Enter') openLightbox(i); }} style={{backgroundImage:`url(${src})`}} />
              ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={next} aria-label="Next">›</button>
        </div>

        {lightboxIndex >= 0 && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <img src={photos[lightboxIndex]} alt="enlarged" onClick={(e)=>e.stopPropagation()} />
          </div>
        )}
      </div>
    </section>
  )
}
