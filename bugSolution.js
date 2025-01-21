```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  // Solution using optional chaining and nullish coalescing
  return (
    <View>
      <Text>{data?.user?.name ?? 'User name not available'}</Text>
    </View>
  );
};

export default MyComponent;
```