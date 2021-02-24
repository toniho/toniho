import { Fragment } from "react";
import PhotoGallery from '../../components/PhotoGallery';
const photoSources = [
    { src: '/images/dan-farrell-RFgSymp9d80-unsplash.jpg' },
    { src: '/images/simon-lohmann-eR41-G-ZMqo-unsplash.jpg' },
];

/**
 * Return array with num items using photos as sources
 * @param {Array} photos 
 * @param {Integer} num 
 * @returns {Array}
 */
const loopPhotos = (photos, num) => {
    const photoSets = Math.floor(num / photos.length);
    const leftovers = num % photos.length;
    let final = [];

    for (let ctr = 0; ctr < photoSets; ctr++) {
        final = [...final, ...photos];
    }

    for (let ctr = 0; ctr < leftovers; ctr++) {
        final.push(photos[ctr]);
    }

    return final;
}
const photos = loopPhotos(photoSources, 51);

const AlbumPage = () => {

    return (
        <div className="album-page page">
            <h1>Album</h1>
            <PhotoGallery photos={photos} />
        </div>
    );
};


export default AlbumPage;