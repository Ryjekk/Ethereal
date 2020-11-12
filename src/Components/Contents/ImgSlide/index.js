import React, {useState, useCallback, useEffect} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
// Assets
import { tattooAnna, tattooDeb, tattooMyrra } from '../../../Data/ImgSlideData'

function ImgSlide(props) {
    const {person} = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photoGallery, setGallery] = useState(null);

    useEffect(() => {
        if (person === 'anna') {
            setGallery(tattooAnna)
        } else if (person === 'deb') {
            setGallery(tattooDeb)
        } else if (person === 'myrra') {
            setGallery(tattooMyrra)
        }
    }, [person])

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photoGallery} onClick={openLightbox} margin={7} targetRowHeight={280}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photoGallery.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default ImgSlide;
