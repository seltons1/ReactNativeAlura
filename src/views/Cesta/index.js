import React from 'react';
import { StyleSheet, View} from 'react-native';
import Topo from './Componentes/topo';
import ItemDetail from './Componentes/conteudo';

export default function Cesta({topo , detalhes}) {
    return <><Topo {...topo}/>

    <View style={style.cesta}>
        <ItemDetail {...detalhes}/>
    </View>
    </>
    
}

const style = StyleSheet.create({
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
        
    },    

});