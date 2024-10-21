import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, View,Text } from 'react-native';






const productPage=()=>{

const {id}= useLocalSearchParams();

  return(
  <View style={styles.Container}>
     
     {/* <Image source={{uri:product.image}} style={styles.productImg}  resizeMode='contain'/> */}
     {/* <Text style={styles.title} >{product.name}</Text> */}
     <Text style={styles.price} >"This is the Product Page {id}"</Text>

    </View>
  );
};

export default productPage ;

const styles = StyleSheet.create({
  Container: {
    backgroundColor:'#ffffff',
    padding:10,
    borderRadius:20,
    flex:1

  },
  productImg:{
    width: '100%',
    aspectRatio:1

  },
  title:{
   fontSize:20,
   fontWeight:'600'

  },
  price:{
   fontSize:17,
   fontWeight:'500',
   color:'#f73639'
  }
});
