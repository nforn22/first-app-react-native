import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './CastSection.styles';

export const CastSection = () => {
  return (
    <View style={styles.castSection}>
      <View style={styles.castHeader}>
        <Text style={styles.castTitle}>Top Billed Cast</Text>
        <Text style={styles.seeAllText}>SEE ALL</Text>
      </View>
      
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={styles.castScrollView}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <View style={styles.actorCard}>
          <Image 
            source={require('../../../assets/Matthew-McConaughey.webp')}
            style={styles.actorImage}
            resizeMode="cover"
          />
          <Text style={styles.actorName} numberOfLines={1}>Matthew McConaughey</Text>
          <Text style={styles.characterName}>Cooper</Text>
        </View>
        
        <View style={styles.actorCard}>
          <Image 
            source={require('../../../assets/anna-hathaway.jpg')}
            style={styles.actorImage}
            resizeMode="cover"
          />
          <Text style={styles.actorName} numberOfLines={1}>Anne Hathaway</Text>
          <Text style={styles.characterName}>Brand</Text>
        </View>
        
        <View style={styles.actorCard}>
          <Image 
            source={require('../../../assets/Jessica-Chastain.webp')}
            style={styles.actorImage}
            resizeMode="cover"
          />
          <Text style={styles.actorName} numberOfLines={1}>Jessica Chastain</Text>
          <Text style={styles.characterName}>Murph</Text>
        </View>
      </ScrollView>
    </View>
  );
}; 