// export default console.log('it imported') || true;

import React from 'react';
import text from './text';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page wrap size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text wrap>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page wrap size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text wrap>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page wrap size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text wrap>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page wrap size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text wrap>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page wrap size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text wrap>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


export default MyDocument;