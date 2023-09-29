import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
export default function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemon(data.results))
  }
  , []);
  return (
    <View style={styles.container}>
      {
        pokemon && pokemon.map((pokemon, index) => (
          <View key={index}>
            <Text>{pokemon.name}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
