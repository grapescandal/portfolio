import React from 'react';
import ImageGallery from 'react-image-gallery';

class Modal extends React.Component {

    render() {
        const idName = this.props.idName;
        const title = this.props.title;
        const images = [
            {
                original: this.props.image1,
                thumbnail: this.props.image1,
            },
            {
                original: this.props.image1,
                thumbnail: this.props.image1,
            },
            {
                original: this.props.image1,
                thumbnail: this.props.image1,
            },
        ];
        return (
            <div className="modal fade" id={"WorkModal" + idName} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modalBody">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                            <div className="col">
                                                Description here.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;