import { View, Text } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switeable - React Native Reanimated</Text>
    </View>
  )
}