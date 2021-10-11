import React from "react";
import {Image, Dimensions, StyleSheet} from "react-native"

import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/texto';

const width = Dimensions.get('screen').width;

export default function Topo(){

    return <><Image source={topo} style={style.topo}/>
    <Texto style={style.titulo}>Detalhes da Cesta</Texto>
    </>

}


const style = StyleSheet.create({

    topo: {
       
        height:578 / 768 * width,
        width:"100%"
    },
    titulo:{
        width: "100%",
        position:"absolute",
        textAlign:"center",
        fontSize:16,
        color:"white",
        fontWeight:"bold",
        padding:16
    },

})

