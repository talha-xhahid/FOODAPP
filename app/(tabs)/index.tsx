import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import Myproductcomponent from '@/components/Myproductcomponent';
import useFetch from '../../hooks/usefetch'; // Import your custom hook

const API_URL = 'https://simple-grocery-store-api.online/products';

export default function HomeScreen() {
  const { data: products, loading, error } = useFetch(API_URL);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {"UNABLE TO GET DATA FROM API"}</Text>;
  }

  return (
    <View>
    
      <FlatList
        data={products}
        renderItem={({ item }) => <Myproductcomponent product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
