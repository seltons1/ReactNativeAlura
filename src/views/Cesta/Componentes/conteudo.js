import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Texto from '../../../componentes/texto';


export default function ItemDetail({nome,logoFazenda,nomeFazenda,descricao,preco,botao}){

    return <><Texto style={style.nome}>{nome}</Texto>
    <View style={style.fazenda}>
        <Image source={logoFazenda} style={style.logo}></Image>
        <Texto style={style.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    
    <Texto style={style.descricao}>{descricao}</Texto>
    <Texto style={style.preco}>{preco}</Texto>
    <TouchableOpacity style={style.botao} onPress={function(){ alert("Teste!")}}><Texto style={style.textoBotao}>{botao}</Texto></TouchableOpacity></>
    

}

const style = StyleSheet.create({

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
        marginTop:8
    },
    botao:{
        marginTop:16,
        backgroundColor:"#2A9F85",
        paddingVertical:16,
        borderRadius:6,
    },
    textoBotao:{
        textAlign:"center",
        color:"#fff",
        fontSize:20,
        lineHeight:26,
        fontWeight:"bold"
    }

})