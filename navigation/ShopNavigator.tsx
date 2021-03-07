import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProdcutsOverView: {
      screen: ProductsOverviewScreen,
    },
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(ProductsNavigator);