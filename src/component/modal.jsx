import React from 'react';
import ImageGallery from 'react-image-gallery';

class Modal extends React.Component {
    render() {
        const data = this.props.data;
        let title = null;
        let pics = null;
        let images = null;
        let listOfDescriptions = null;

        if (data != null) {
            title = data.title;
            pics = data.images;

            let descriptionsProp = data.descriptions;
            listOfDescriptions = descriptionsProp.map((description, index) =>
                <li key={index}>
                    {description}
                </li>
            );

            images = [
                {
                    original: pics[0],
                    thumbnail: pics[0],
                },
                {
                    original: pics[1],
                    thumbnail: pics[1],
                },
                {
                    original: pics[2],
                    thumbnail: pics[2],
                },
                {
                    original: pics[3],
                    thumbnail: pics[3],
                },
            ];
        }

        return (
            <div className="modal fade" id="WorkModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    {data != null ?
                        <div className="modal-content modalBody">
                            <div className="modal-header justify-content-center">
                                <div className="row w-100">
                                    <div className="col-xl-12">
                                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                    </div>
                                </div>  
                                <button type="button" className="closeButton" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col">
                                            <div className="row h-75">
                                                <div className="col">
                                                    <ImageGallery items={images} />
                                                </div>
                                            </div>
                                            <div className="row h-25">
                                                <div className="col pt-1 text-left">
                                                    <ul>{listOfDescriptions}</ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default Modal;