import PropTypes from 'prop-types';

const GalleryThumbnail = ({ photo }) => {
    return <li className="w-full object-cover"><img className="object-cover w-full h-full" src={photo} /></li>;
};

GalleryThumbnail.propTYpes = {
    photo: PropTypes.string.isRequired,
};

export default GalleryThumbnail;