import React, {useState, useCallback, useEffect} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
//GQL
import { useQuery } from "@apollo/react-hooks";
import GALLEY_QUERY from "../../../queries/galleryQuery";

function ImgSlide(props) {
    const {person} = props;

    const {data, loading, error} = useQuery(GALLEY_QUERY);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photoGallery, setGallery] = useState(null);
    const [rowHeight, setRowHeight] = useState(null)

    //todo channge this string
    useEffect(() => {
        const arrOfPics = []
        if (data) {
            const makeObjectArr = (data) => {
                 data.map(el => {
                    const transformedData = el.img_gallery.src.map(pic => {
                        return {
                            width: el.img_gallery.width,
                            height: el.img_gallery.height,
                            src: `http://localhost:1337${pic.url}`
                        }
                    })
                     return arrOfPics.push(transformedData)
                })
            }
            makeObjectArr(data.mainArtistsData)
            makeObjectArr(data.guestPageData)
            console.log(arrOfPics)
        }


        if (person === 'anna') {
            setGallery(arrOfPics[0])
            setRowHeight(280)
        } else if (person === 'myrra') {
            setGallery(arrOfPics[1])
            setRowHeight(280)
        }
        else if (person === 'pola') {
            setGallery(arrOfPics[2])
            setRowHeight(280)
        }
        else if (person === 'marta') {
            setGallery(arrOfPics[3])
            setRowHeight(100)
        }
        else if (person === 'oak') {
            setGallery(arrOfPics[4])
            setRowHeight(100)
        }
        else if (person === 'sztuka') {
            setGallery(arrOfPics[5])
            setRowHeight(100)
        }
        else if (person === 'roman') {
            setGallery(arrOfPics[6])
            setRowHeight(100)
        }
        else if (person === 'prostolinijna') {
            setGallery(arrOfPics[7])
            setRowHeight(100)
        }
        else if (person === 'sianko') {
            setGallery(arrOfPics[8])
            setRowHeight(100)
        }
    }, [data, person])

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

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
