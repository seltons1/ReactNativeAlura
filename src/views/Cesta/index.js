import React from 'react';
import { Image , StyleSheet, Dimensions, Text, View} from 'react-native';

import Texto from '../../componentes/texto';
import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';



const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <><Image source={topo} style={style.topo}/>
    <Texto style={style.titulo}>Detalhes da Cesta</Texto>

    <View style={style.cesta}>
        <Texto style={style.nome}>Cesta de Verduras</Texto>
        <View style={style.fazenda}>
            <Image source={logo} style={style.logo}></Image>
            <Texto style={style.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        
        <Texto style={style.descricao}>Uma cesta com produtos 
            cuidadosamente direto para 
            sua cozinha.</Texto>
        <Texto style={style.preco}>R$ 40,00</Texto>
    </View>
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
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
        
    },
    nome:{
        fontSize:26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
        
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },
    logo:{
        width: 32,
        height:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontFamily:"MontserratRegular"
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26
    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        margimTop:8
    },
    

});