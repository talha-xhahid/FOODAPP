import { Image, StyleSheet, View,Text, Pressable } from 'react-native';
import products from '../assets/data/products'
import { Link } from 'expo-router';

const product=products[0];
type Product={
    id:number,
    name:string,
    price:number,
    image:string,
    
  }
type ProductComponentProps={
    product:Product
}  


const Myproductcomponent=({product}:ProductComponentProps)=>{
  return(
<Link href={"/1"} asChild>
  <Pressable style={styles.Container}>
     
     <Image source={{uri:product.image}} style={styles.productImg}  resizeMode='contain'/>
     <Text style={styles.title} >{product.name}</Text>
     <Text style={styles.price} >{product.price}</Text>
     

    </Pressable>
    </Link>
  );
};

export default Myproductcomponent;

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
