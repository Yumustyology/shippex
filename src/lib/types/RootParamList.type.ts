import { createStackNavigator } from "@react-navigation/stack";

export type RootParamList = {
    Home: undefined;
    Profile: undefined;
    Wallet: undefined;
  };
  
  const Stack = createStackNavigator<RootParamList>();
  