import React from 'react';
import { Button } from '../Button';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';
import Services from './Services';

import '../Cards.css';
import './Services.css';


function ServiceHome(){
    return(
        <>
        <Services/>
        <Footer/>
        </>
    );

}


export default ServiceHome;