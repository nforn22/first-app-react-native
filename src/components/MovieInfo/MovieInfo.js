import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './MovieInfo.styles';

export const MovieInfo = () => {
  return (
    <>
      <Text style={styles.movieTitle}>Interstellar</Text>
      
      <Text style={styles.movieInfo}>2014 PG-13 2h 49min Adventure, Drama, Sci-Fi</Text>
      
      <View style={styles.mainSection}>
        <View style={styles.posterContainer}>
          <Image 
            source={require('../../../assets/interstellar-poster.jpg')}
            style={styles.poster}
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
          </Text>
          
          <TouchableOpacity style={styles.watchlistButton}>
            <Text style={styles.watchlistButtonText}>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}; 