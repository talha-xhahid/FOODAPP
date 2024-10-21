import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from 'D:\React Native\MyFoodApp\node_modules\@react-native-async-storage';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem(url);
        if (storedData) {
          setData(JSON.parse(storedData));
          setLoading(false);
        } else {
          const response = await axios.get(url);
          setData(response.data);
          await AsyncStorage.setItem(url, JSON.stringify(response.data));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
