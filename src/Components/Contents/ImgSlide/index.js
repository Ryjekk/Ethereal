import React, {useState, useCallback, useEffect} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
// Assets
import {
    tattooAnna,
    tattooMarta,
    tottooPola,
    tattooMyrra,
    tattooOak,
    tattooRoman,
    tattooProstolinijna,
    tattooSianko,
    tattooSztuka
} from '../../../Data/ImgSlideData'

function ImgSlide(props) {
    const {person} = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photoGallery, setGallery] = useState(null);
    const [rowHeight, setRowHeight] = useState(null)

    useEffect(() => {
        if (person === 'anna') {
            setGallery(tattooAnna)
            setRowHeight(280)
        } else if (person === 'myrra') {
            setGallery(tattooMyrra)
            setRowHeight(280)
        }
        else if (person === 'pola') {
            setGallery(tottooPola)
            setRowHeight(280)
        }
        else if (person === 'marta') {
            setGallery(tattooMarta)
            setRowHeight(100)
        } else if (person === 'roman') {
            setGallery(tattooRoman)
            setRowHeight(100)
        } else if (person === 'oak') {
            setGallery(tattooOak)
            setRowHeight(100)
        } else if (person === 'prostolinijna') {
            setGallery(tattooProstolinijna)
            setRowHeight(100)
        } else if (person === 'sianko') {
            setGallery(tattooSianko)
            setRowHeight(100)
        } else if (person === 'sztuka') {
            setGallery(tattooSztuka)
            setRowHeight(100)
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
            <Gallery photos={photoGallery} onClick={openLightbox} margin={7} targetRowHeight={rowHeight}/>
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
