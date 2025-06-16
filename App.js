import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header/Header';
import { MovieInfo } from './src/components/MovieInfo/MovieInfo';
import { RatingsSection } from './src/components/RatingsSection/RatingsSection';
import { CastSection } from './src/components/CastSection/CastSection';
import { CreditsSection } from './src/components/CreditsSection/CreditsSection';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <MovieInfo />
        <RatingsSection />
        <CastSection />
        <CreditsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    backgroundColor: '#1a1a1a',
    paddingBottom: 50,
  },
});