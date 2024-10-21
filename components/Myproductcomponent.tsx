import { Image, StyleSheet, View,Text, Pressable } from 'react-native';
import products from '../assets/data/products'
import { Link } from 'expo-router';

const product=products[0];
type Product={
    id:number,
    name:string,
    category:string,
    image:string,
    
  }
type ProductComponentProps={
    product:Product
}  


const Myproductcomponent=({product}:ProductComponentProps)=>{
  const randomNumber = Math.floor(Math.random() * 80) + 1;
  return(
<Link href={"/1"} asChild>
  <Pressable style={{backgroundColor:'#ffffff',
    padding:10,
    borderRadius:20,
    width:"50%",
    height: Math.random() < 0.5 ? 300 : 400,
    justifyContent:'space-between',

  }
    }>
     
     <Image source={{uri: `https://foodish-api.com/images/burger/burger${randomNumber}.jpg`}} style={styles.productImg}  resizeMode='contain'/>
     <Text style={styles.title} >{product.name}</Text>
     <Text style={styles.price} >{product.category}</Text>
     

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
    width:"50%",
    height: Math.floor(Math.random() * 100) + 300

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
