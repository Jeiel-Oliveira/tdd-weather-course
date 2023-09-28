import React, { ReactNode } from 'react';
import { View, ViewProps, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants';

type Props = {
  label: string | ReactNode
  onPress: () => void
  loading?: boolean
} & ViewProps

export default function ButtonDefault ({ label, onPress, loading, style, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} testID='button-default'>
      <LinearGradient 
        {...rest} 
        colors={[Colors.LIGHTER_GRAY, Colors.DARK_GRAY]}
        style={[styles.container, style]}
      >
        <Text style={styles.label}>{label}</Text>
        {loading &&
          <ActivityIndicator 
            testID='button-loading'
            size={24}
            color={Colors.WHITE}
          />
        }
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 19,
    color: Colors.WHITE
  }
})