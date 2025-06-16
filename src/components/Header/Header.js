import { View, Image } from 'react-native';
import { styles } from './Header.styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/logo-imdb.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}; 