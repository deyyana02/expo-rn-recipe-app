// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useNavigation} from '@react-navigation/native';
// import RecipeListScreen from './scr/screens/RecipeListScreen';
// import SavedRecipesScreen from './scr/screens/SavedRecipesScreen';
// import ScanRecipesScreen from './scr/screens/ScanRecipesScreen';
import MainScreen from './scr/screens/screens/MainScreen';
import RecipeDetailScreen from './scr/screens/screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" 
        component={MainScreen} 
        options={{
          headerShown : false,
         }}/>

         <Stack.Screen
         name = "RecipeDetailScreen"
         component ={RecipeDetailScreen}
         options={{
          title : 'Recipe Detail',
          headerTransparent: true,
         }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//tambahan di line 13
// const Stack = createNativeStackNavigator{};

// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
//         <Text>Go to Detail Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function DetailScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Account')}>
//         <Text>Go to Account Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function AccountScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//         <Text>Account Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }