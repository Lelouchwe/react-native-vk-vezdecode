import React from 'react'
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native'

export const MainScreen = ({navigation}) => {
    const GoTo = () => {
        navigation.navigate('TypeCollect')
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <View>
                <Text style={styles.h1}>Пожертвования</Text>
            </View> */}
            {/* <View style={styles.hr}></View> */}
            <View style={styles.wrap}>
                <Text style={styles.span}>
                У Вас пока нет сборов. {'\n'} Начните доброе дело.
                </Text>
                <TouchableOpacity
                style={styles.btn}
                onPress={GoTo}
                // onPress={onPress}
                >
                <Text style={styles.btn_text}>
                    Создать сбор
                </Text>
                </TouchableOpacity>
            
            {/* <StatusBar style="auto" /> */}
            </View>
        </SafeAreaView>
    )
}
MainScreen.navigationOptions = {
    headerTitle: 'Пожертвования'
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative',
      height: '100%',
      alignItems: 'center',
    },
    wrap: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '50%',
    },
    h1: {
      fontSize: 21,
      fontWeight: '600',
      margin: 8.5,
    },
    span: {
      textAlign: 'center',
      color: '#818C99'
    },
    btn: {
      backgroundColor: '#4986CC',
      width: 133,
      height: 36,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 24,
      alignSelf: 'center',
    },
    btn_text: {
      color: '#FFFFFF',
    },
    hr: {
      height: 0.33,
      backgroundColor: '#D7D8D9',
      paddingRight: 12,
      paddingLeft: 12,
      marginTop: 13.5,
      width: '90%',
    }
  });