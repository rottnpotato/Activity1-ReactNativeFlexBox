import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'left',
      justifyContent: 'leading',
      marginRight: 20,
      marginLeft: 20,
    },
    clrMode:{
        width: 330,
        height: 240,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 20,
        borderWidth:1,
    },
    iconSlot:{
        width: 100,
        height: 100,
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 20,
        borderWidth:1,
        borderRadius: 50,
      },
    fonti:{
        marginLeft: 20,
        fontSize: 23,
        color: 'white',
    },
    fontii:{
        marginLeft: 20,
        fontSize: 12,
        color: 'white',
    },
    fontiii:{
        marginTop: 20,
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    boxi:{
        flexDirection: "row",
        width: 330,
        height: 75,
        borderRadius: 15,
        marginBottom: 20,
    },
    subFont:{
        marginTop: 20,
        textAlign: 'flex-start',
        marginLeft: 20,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },
    txtFont:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 13,
        color: 'black',
    },
  });