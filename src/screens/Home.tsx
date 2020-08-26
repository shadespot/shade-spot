import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Searchbar } from 'react-native-paper'

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Searchbar
          style={styles.searchBar}
          inputStyle={styles.searchBarInput}
          searchAccessibilityLabel="Search for event or venue"
          icon={null}
          placeholder="Look for your event or venue"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <Text style={styles.title}>ShadeSpot</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F79868',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontColor: '#404040',
    fontSize: 20,
    fontWeight: 800
  },
  searchBar: {
    backgroundColor: '#f7e7d7',
    boxShadow: 'none',
    fontColor: '#404040',
    fontSize: '14px',
    textAlign: 'center',
    borderRadius: '48px',
    minWidth: '320px',
    maxWidth: '600px',
    margin: '1rem',
  },
  searchBarInput: {
    fontColor: '#404040',
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: 500
  }
})

export default Home