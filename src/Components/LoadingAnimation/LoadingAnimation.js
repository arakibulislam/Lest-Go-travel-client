import React from 'react';
import './LoadingAnimation.css'

const LoadingAnimation = () => {
    return (
        <div class="wrap">
            <div class="loading">
                <div class="bounceball"></div>
                <div class="text">NOW LOADING</div>
            </div>
        </div>
    );
};

export default LoadingAnimation;