import { Fragment, useEffect, useRef, useState } from 'react';
import GalleryThumbnail from './GalleryThumbnail';



const PhotoGallery = ({ photos, galleryName='', initialPhotos=20 }) => {
    let [loadPhotos, setLoadPhotos] = useState(20);
    const galleryBottom = useRef(null);
    let observer;

    const handleObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && galleryBottom.current === entry.target) {
                console.log('moo', entry);
                let loadAmount = loadPhotos + initialPhotos;
                if (loadAmount > photos.length) {
                    loadAmount = photos.length;
                }
                setLoadPhotos(loadAmount);
            }
        });
    };

    useEffect(() => {
        if (typeof observer === 'undefined') {
            observer = new IntersectionObserver(handleObserver);
        }
        
        if (galleryBottom && galleryBottom.current !== null) {
            observer.observe(galleryBottom.current);
        }    
    });

    let liPhotos = [];
    for (let c = 0; c < loadPhotos; c++) {
        const { src } = photos[c];
        liPhotos.push(<GalleryThumbnail  key={`pk-${src}-${c}`} photo={src} />);
    }

    return (
        <div className="photo-gallery">
            { galleryName && <h2>{galleryName}</h2>}
            <ul className="photos grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <Fragment>
                    {liPhotos}
                    <li ref={galleryBottom} />
                </Fragment>
            </ul>
            
        </div>
    );
};

export default PhotoGallery;