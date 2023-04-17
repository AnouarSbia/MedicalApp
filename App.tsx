const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Choosing from "./screens/Choosing";
import InfosMedecin from "./screens/InfosMedecin";
import PriseRdv from "./screens/PriseRdv";
import Medecin4 from "./screens/Medecin4";
import Medecin3 from "./screens/Medecin3";
import Medecin2 from "./screens/Medecin2";
import Medecin1 from "./screens/Medecin1";
import PatientHome from "./screens/PatientHome";
import InfosPatient from "./screens/InfosPatient";
import Welcome from "./screens/Welcome";
import FrameScreen from "./screens/FrameScreen";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    "Russo One_regular": require("./assets/fonts/Russo_One_regular.ttf"),
    Gruppo_regular: require("./assets/fonts/Gruppo_regular.ttf"),
    Cairo_medium: require("./assets/fonts/Cairo_medium.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Choosing"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Choosing"
                component={Choosing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfosMedecin"
                component={InfosMedecin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PriseRdv"
                component={PriseRdv}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Medecin4"
                component={Medecin4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Medecin3"
                component={Medecin3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Medecin2"
                component={Medecin2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Medecin1"
                component={Medecin1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PatientHome"
                component={PatientHome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InfosPatient"
                component={InfosPatient}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={FrameScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Welcome />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
