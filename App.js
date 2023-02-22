
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Thongtincanhan from './Manhinh/Thongtincanhan';
import qlcuahang from './Manhinh/QLcuahang/qlcuahang';
import Them from './Manhinh/QLcuahang/Them';
import Sua from './Manhinh/QLcuahang/Sua';

const Stack = createNativeStackNavigator();
const HomeScreen = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://picsum.photos/50'}} 
      />
<View style={styles.btn}>

<Button
      style={styles.btn}
        title="Thông Tin Cá Nhân"
        onPress={() => nav.navigate('Thongtincanhan')}
      />
</View>
      
<View style={styles.btn}>

<Button
      style={styles.btn}
        title='Quản Lí Cửa Hang'
        onPress={() => nav.navigate('qlcuahang')}
      />
</View>
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StoreManager'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Thongtincanhan' component={Thongtincanhan} />
        <Stack.Screen name='qlcuahang' component={qlcuahang} />
        <Stack.Screen name='Them' component={Them} />
        <Stack.Screen name='Sua' component={Sua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 50,
    borderWidth: 2,
    width: 200,
    alignSelf: "center",
    backgroundColor: "#fff",
  }
});
