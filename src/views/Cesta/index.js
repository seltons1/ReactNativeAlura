import React from 'react';
import { StyleSheet, View} from 'react-native';
import Topo from './Componentes/topo';
import ItemDetail from './Componentes/conteudo';
import Itens from '../../views/Cesta/Componentes/itens';

export default function Cesta({topo , detalhes, itens}) {
    return <><Topo {...topo}/>

    <View style={style.cesta}>
        <ItemDetail {...detalhes}/>
        <Itens {...itens}></Itens>
    </View>
    </>
    
}

const style = StyleSheet.create({
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
        
    },    

});