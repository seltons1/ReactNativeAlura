import React from 'react';
import { StyleSheet, View} from 'react-native';



import Topo from './Componentes/topo';
import ItemDetail from './Componentes/conteudo';



export default function Cesta() {
    return <><Topo/>

    <View style={style.cesta}>
        <ItemDetail/>
    </View>
    </>
    
}

const style = StyleSheet.create({

    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
        
    },
    
    

});