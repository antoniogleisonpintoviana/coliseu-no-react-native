
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View,Text,Image,Button} from 'react-native';


import {
 SafeAreaView,
  StyleSheet,
 
  TouchableOpacity,
} from 'react-native';


function teste(){
  alert('teste');
}

export default class ColiseuRPG extends Component{


  

 render(){

   return(
      <View style={{flex:1, flexDirection:"column"}}>
     
     <Text style={{color:"red",backgroundColor:'black',height:40}}> Coliseu RPG regra simples 1,2, 3 acerta. 4,5,6 erra. </Text>
     
     <View style={{marginBottom:50}}></View>

     <View>
     
     <TouchableOpacity onPress={()=> teste()} >
     <Image 
     
     style={{ width: 40, height: 40,marginTop:50 }}
     source={require('./btnMontros.png')} />

    </TouchableOpacity>

      </View>
    

      <View>
      <TouchableOpacity>
     <Image 
     
     style={{ width: 40, height: 40,marginTop:50 }}
     source={require('./btnCenario.png')} />
     </TouchableOpacity>
     </View>
      
      <View>

      <TouchableOpacity>
     <Image 
     
     style={{ width: 40, height: 40,marginTop:50 }}
     source={require('./btnObjetos.png')} />
     </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity>
     <Image 
     
     style={{ width: 40, height: 40,marginTop:50 }}
     source={require('./btnFichas.png')} />
     </TouchableOpacity>
    </View>
     
     <View>
     <TouchableOpacity>
     <Image 
     
     style={{ width: 40, height: 40,marginTop:50 }}
     source={require('./btnDados.png')} />
     </TouchableOpacity>
     </View>
    
     </View>

     
   );
 }

}


  

