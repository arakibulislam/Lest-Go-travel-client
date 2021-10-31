import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "./Phots";

const Moment = () => {
    return (
        <div className='container'>
            <Gallery photos={photos} />;
        </div>
    );
};

export default Moment;