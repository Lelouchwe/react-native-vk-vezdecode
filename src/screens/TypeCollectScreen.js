import React from 'react'
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native'

export const TypeCollect = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <View>
                <Text style={styles.h1}>Пожертвования</Text>
            </View>
            <View style={styles.hr}></View> */}
            <View style={styles.wrap}>
                <TouchableOpacity
                style={styles.btn_type}
                // onPress={onPress}
                >
                    <Text style={styles.btn_text}>
                        Целевой сбор
                    </Text>
                    <Text style={styles.btn_subtext}>
                        Когда есть определенная цель
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btn_type}
                // onPress={onPress}
                >
                    <Text style={styles.btn_text}>
                        Регулярный сбор
                    </Text>
                    <Text style={styles.btn_subtext}>
                        Если помощь нужна ежемесячно
                    </Text>
                </TouchableOpacity>
            
            {/* <StatusBar style="auto" /> */}
            </View>
        </SafeAreaView>
    )
}
TypeCollect.navigationOptions = {
    headerTitle: 'Тип сбора'
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
      height: '55%',
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
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,

    },
    btn_subtext: {
        color: '#6D7885',
        fontSize: 13,
        lineHeight: 16,
    },
    btn_type: {
        backgroundColor: '#F5F5F5',
        width: 351,
        height: 62,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 6,
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