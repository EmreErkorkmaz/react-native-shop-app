import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { Product } from "../../models/product";
import { UseSelectorProps } from "../../store";
import { addToCart } from "../../store/actions/cart";

type Props = {
  navigation: NavigationStackProp;
};

const ProductsOverviewScreen = (props: Props) => {
  const { navigation } = props;
  const products = useSelector((state: UseSelectorProps) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          item={itemData.item}
          onViewDetail={() => {
            navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(addToCart(itemData.item))
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
