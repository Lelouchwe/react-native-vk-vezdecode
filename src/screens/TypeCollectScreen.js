import React from 'react'
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native'

export const TypeCollect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <TouchableOpacity
                style={styles.btn_type}
                // onPress={onPress}
                >   
                    <View style={styles.divIcon}>
                        <Image 
                            style={styles.iconLeft} 
                            source={require('../../assets/IconColor.png')}/>
                    </View>
                    <View style={styles.divText}>
                        <Text style={styles.btn_text}>
                            Целевой сбор
                        </Text>
                        <Text style={styles.btn_subtext}>
                            Когда есть определенная цель
                        </Text>
                    </View>
                    <View style={styles.divArrow}>
                        <Image 
                            style={styles.iconRight} 
                            source={require('../../assets/arrowRight.png')}/>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btn_type}
                // onPress={onPress}
                >   
                    <View style={styles.divIcon}>
                        <Image 
                            style={styles.iconLeft} 
                            source={require('../../assets/IconColor2.png')}/>
                    </View>
                    <View style={styles.divText}>
                        <Text style={styles.btn_text}>
                            Регулярный сбор
                        </Text>
                        <Text style={styles.btn_subtext}>
                            Если помощь нужна ежемесячно
                        </Text>
                    </View>
                    <View style={styles.divArrow}>
                        <Image 
                            style={styles.iconRight} 
                            source={require('../../assets/arrowRight.png')}/>
                    </View>
                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        margin: 6,
        flexDirection: 'row',
    },
    divIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
    },
    divText: {
        flex: 1,
    },
    divArrow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,      
    },
    iconLeft: {
        width: 24,
        height: 24,
    },
    iconRight: {
        width: 9.5,
        height: 16.5,
    }
  });