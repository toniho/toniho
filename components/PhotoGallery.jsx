import GalleryThumbnail from './GalleryThumbnail';

const PhotoGallery = ({ photos, galleryName='' }) => {
    return (
        <div className="photo-gallery">
            { galleryName && <h2>{galleryName}</h2>}
            <ul className="photos grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {photos.map(({ src }, index) => <GalleryThumbnail  key={`pk-${src}-${index}`} photo={src} />)};
            </ul>
        </div>
    );
};

export default PhotoGallery;