
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import {
  Image
} from 'react-native-elements';
import PropTypes from 'prop-types';

import { default as colors } from './../../common/colors';

const RecipeView = (
  {
    recipe
  }
) => (
    <View style={{ marginVertical: 8, }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: colors.dark_blue }}>
        {recipe.label}
      </Text>
      <Image
        source={{ uri: recipe.image }}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>
        Ingredients
      </Text>
      {
        recipe.ingredientLines.map(
          (item, key) => (
            <Text key={key} >
              {item}
            </Text>
          )
        )
      }
    </View>
  );

RecipeView.propTypes = {
  recipe: PropTypes.object
};

export default RecipeView;


