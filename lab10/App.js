import React from 'react';
import { Text, View, Button, Image, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  tableRow: {
    flex: 1, 
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 10
  },
  tableCell: {
    flex: 1, 
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  tableColHeading: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

const MyApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      
      {/* Header Image */}
      <Image
        style={{width: 100, height: 100}}
        source={require('./assets/nust-logo.png')}
      />

      {/* Heading */}
      <Text style={{fontWeight: "bold", fontSize: 25}}>
        NUST SEECS Cafe
      </Text>

      {/* Table */}
      <View style={{flex: 0.5, width: '95%'}}>

        {/* Row */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableColHeading}>Item</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableColHeading}>Price</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableColHeading}>Order</Text>
          </View>
        </View>

        {/* Row */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>Biryani</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Rs.100</Text>
          </View>
          <View style={styles.tableCell}>
            <Button 
              title="Order"
              onPress={() => Alert.alert('Order placed successfully!')}
            />
          </View>
        </View>

        {/* Row */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>Sandwich</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Rs.60</Text>
          </View>
          <View style={styles.tableCell}>
            <Button 
              title="Order"
              onPress={() => Alert.alert('Order placed successfully!')}
            />
          </View>
        </View>

        {/* Row */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>Soft Drink</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Rs.30</Text>
          </View>
          <View style={styles.tableCell}>
            <Button 
              title="Order"
              onPress={() => Alert.alert('Order placed successfully!')}
            />
          </View>
        </View>

      </View>
    </View>
  );
}

export default MyApp;