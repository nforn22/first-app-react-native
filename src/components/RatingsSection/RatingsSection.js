import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './RatingsSection.styles';

export const RatingsSection = () => {
  return (
    <View style={styles.ratingsSection}>
      <View style={styles.ratingItem}>
        <AntDesign name="star" size={24} color="#F5C518" />
        <Text style={styles.ratingValue}>8.6</Text>
        <Text style={styles.ratingSubtext}>/10</Text>
        <Text style={styles.ratingDetails}>1.1M</Text>
      </View>
      
      <View style={styles.ratingItem}>
        <AntDesign name="staro" size={24} color="white" />
        <Text style={styles.rateText}>RATE THIS</Text>
      </View>
      
      <View style={styles.ratingItem}>
        <View style={styles.metascoreBox}>
          <Text style={styles.metascoreText}>74</Text>
        </View>
        <Text style={styles.metascoreLabel}>Metascore</Text>
        <Text style={styles.metascoreDetails}>46 critic reviews</Text>
      </View>
    </View>
  );
}; 