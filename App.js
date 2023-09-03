import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './src/style/Styles.js'
import imge from './images.png'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[
          styles.clrMode,
          {backgroundColor: '#1e3799'}
      ]}>
       
      <View style={[
        styles.iconSlot,{ 
          backgroundColor: '#1abc9c',
          backgroundImage: `url(${imge})`, }
      ]}>
        
        </View>
        <Text style={styles.fonti}>James Anthony Estocado</Text>
        <Text style={styles.fontii}>BS Information Technology</Text>
      </View>
      <Text style={styles.fontiii}>My Subjects</Text>
      <View style={[
          styles.boxi,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.subFont}>ELEC 2</Text>
         <Text style={styles.txtFont}>Web Development/Web Enterprise{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.boxi,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.subFont}>ELEC 3</Text>
         <Text style={styles.txtFont}>Mobile Application{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.boxi,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.subFont}>IT 311</Text>
         <Text style={styles.txtFont}>Software Engineering{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.boxi,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.subFont}>IT 312</Text>
         <Text style={styles.txtFont}>Information Assurance and Security 2{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.boxi,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.subFont}>IT 313</Text>
         <Text style={styles.txtFont}>Quantitative Methods{"\n"}Units: 3</Text>
      </View>
      <Text style={{
        flexDirection:'row',
        textAlign:'right',
        color:'blue',
        marginRight:20,

        }}>
        Click Here To See More
        </Text>
    </View>
  );
}


