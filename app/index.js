import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo</Text>
      
      <TouchableOpacity style={styles.item}>
        <Ionicons name="calendar" size={24} color="#3498db" />
        <View style={styles.itemText}>
          <Text style={styles.title}>Item 1</Text>
          <Text>Descrição 1</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="book" size={24} color="#3498db" />
        <View style={styles.itemText}>
          <Text style={styles.title}>Item 2</Text>
          <Text>Descrição 2</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="bookmark" size={24} color="#3498db" />
        <View style={styles.itemText}>
          <Text style={styles.title}>Item 3</Text>
          <Text>Descrição 3</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  itemText: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});