import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
import { Product } from "../../models/product";

interface Props {
  item: Product;
  onViewDetail: () => void;
  onAddToCart: () => void;
}

const ProductItem = (props: Props) => {
  const { item, onViewDetail, onAddToCart } = props;

  let TouchableCmp: any;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primaryColor}
                title="View Details"
                onPress={onViewDetail}
              />
              <Button
                color={Colors.primaryColor}
                title="To Cart"
                onPress={onAddToCart}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: 'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'open-sans'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
