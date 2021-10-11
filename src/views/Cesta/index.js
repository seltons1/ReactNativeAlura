import React from 'react';
import { Image , StyleSheet, Dimensions, Text, View} from 'react-native';

import Texto from '../../componentes/texto';

import logo from '../../../assets/logo.png';

import Topo from './Componentes/topo';



export default function Cesta() {
    return <><Topo/>

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