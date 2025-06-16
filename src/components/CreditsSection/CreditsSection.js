import { View, Text } from 'react-native';
import { styles } from './CreditsSection.styles';

export const CreditsSection = () => {
  return (
    <>
      <View style={styles.creditSection}>
        <Text style={styles.creditTitle}>Director</Text>
        <Text style={styles.creditName}>Christopher Nolan</Text>
      </View>
      <View style={styles.creditSection}>
        <Text style={styles.creditTitle}>Writers</Text>
        <Text style={styles.creditName}>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
      </View>
    </>
  );
} 