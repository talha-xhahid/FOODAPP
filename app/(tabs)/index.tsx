import {View,FlatList} from 'react-native';
import Myproductcomponent from '@/components/Myproductcomponent';
import products from '@/assets/data/products';






export default function HomeScreen() {
  return (
    <View>
     <FlatList data={products} renderItem={({item})=><Myproductcomponent product={item}/>} numColumns={2} 
      contentContainerStyle={{gap:10 , padding:10}}
      columnWrapperStyle={{gap:10}}
     />
    </View>
  );
}

