import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, ScrollView, TouchableOpacity, /*image*/ } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* header avec logo IMDb */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>IMDb</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* titre du film */}
        <Text style={styles.movieTitle}>Interstellar</Text>
        
        {/* infos du film */}
        <Text style={styles.movieInfo}>2014 PG-13 2h 49min Adventure, Drama, Sci-Fi</Text>
        
        {/* section principale avec affiche et desc */}
        <View style={styles.mainSection}>
          {/* affiche du film */}
          <View style={styles.posterContainer}>
            <View style={styles.poster} />
          </View>
          
          {/* description et bouton */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
            </Text>
            
            <TouchableOpacity style={styles.watchlistButton}>
              <Text style={styles.watchlistButtonText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* section ratings */}
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
        
        {/* section Top Billed Cast */}
        <View style={styles.castSection}>
          <View style={styles.castHeader}>
            <Text style={styles.castTitle}>Top Billed Cast</Text>
            <Text style={styles.seeAllText}>SEE ALL</Text>
          </View>
          
          {/* scrollView horizontal pour les acteurs */}
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={styles.castScrollView}
          >
            <View style={styles.actorCard}>
              <View style={styles.actorImage} />
              <Text style={styles.actorName} numberOfLines={1}>Matthew McCon...</Text>
              <Text style={styles.characterName}>Cooper</Text>
            </View>
            
            <View style={styles.actorCard}>
              <View style={styles.actorImage} />
              <Text style={styles.actorName} numberOfLines={1}>Anne Hathaway</Text>
              <Text style={styles.characterName}>Brand</Text>
            </View>
            
            <View style={styles.actorCard}>
              <View style={styles.actorImage} />
              <Text style={styles.actorName} numberOfLines={1}>Jessica Ch...</Text>
              <Text style={styles.characterName}>Murph</Text>
            </View>
          </ScrollView>
        </View>
        
        {/* section `Director` */}
        <View style={styles.creditSection}>
          <Text style={styles.creditTitle}>Director</Text>
          <Text style={styles.creditName}>Christopher Nolan</Text>
        </View>
        
        {/* section `Writers` */}
        <View style={styles.creditSection}>
          <Text style={styles.creditTitle}>Writers</Text>
          <Text style={styles.creditName}>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#1a1a1a',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  logoContainer: {
    backgroundColor: '#F5C518',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  logoText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  movieTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  movieInfo: {
    color: '#999',
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  mainSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  posterContainer: {
    marginRight: 16,
  },
  poster: {
    width: 120,
    height: 180,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  watchlistButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  watchlistButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  ratingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 30,
  },
  ratingItem: {
    alignItems: 'center',
    flex: 1,
  },
  ratingValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ratingSubtext: {
    color: '#999',
    fontSize: 14,
  },
  ratingDetails: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  rateText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  metascoreBox: {
    backgroundColor: '#66CC33',
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metascoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  metascoreLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  metascoreDetails: {
    color: '#999',
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
  castSection: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  castHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  castTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: 'bold',
  },
  castScrollView: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  actorCard: {
    marginRight: 12,
    width: 120,
  },
  actorImage: {
    width: 120,
    height: 160,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 8,
  },
  actorName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  characterName: {
    color: '#999',
    fontSize: 12,
  },
  creditSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  creditTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  creditName: {
    color: '#999',
    fontSize: 14,
    lineHeight: 18,
  },
});