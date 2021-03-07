import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Product } from '../../models/product';
import { UseSelectorProps } from '../../store';
import { addToCart } from '../../store/actions/cart';

interface Props {
  navigation: NavigationStackProp
}

const ProductDetailScreen = (props: Props) => {
  const { navigation } = props;

  const dispatch = useDispatch()

  const productId = navigation.getParam('productId');

  const selectedProduct = useSelector((state: UseSelectorProps) => state.products.availableProducts.find(prod => prod.id === productId));


  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct?.imageUrl}}/>
      <View style={styles.actions}>
        <Button color={Colors.primaryColor} title="Add to Cart" onPress={() => {
          if(selectedProduct){
            dispatch(addToCart(selectedProduct))
          }
        }} />
      </View>
      <Text style={styles.price}>${selectedProduct?.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct?.description}</Text>
    </ScrollView>
  )
}

ProductDetailScreen.navigationOptions = (navData:{navigation: NavigationStackProp}) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  }
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'open-sans'
  }
})
