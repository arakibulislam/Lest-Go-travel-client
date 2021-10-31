import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Moment from '../Moment/Moment';


import Package from '../Package/Package';

const Home = () => {
    return (
        <div id='home' className='login'>
            <Header></Header>
            <About></About>
            <Package></Package>
            <Moment></Moment>
            <Blogs></Blogs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;