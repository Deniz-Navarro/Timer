import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#3BBCA1"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding : 30
},
});


const App = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1); }, 1000);

      if(seconds >= 60){
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      return () => {clearInterval(interval);
      }
    }, [seconds]);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 2</Text>
      <Button title="Reiniciar" onPress={() => 
      {
      setSeconds(0);
      setMinutes(0);
      }}/>
      <Text style={styles.title}>{minutes}:{seconds}</Text>
    </View>
  );
};

export default App;