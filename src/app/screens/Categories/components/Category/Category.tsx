import * as React from 'react';
import {Card, Button} from 'react-native-paper';
import {iCategoryProps} from './types';
import {View} from 'react-native';
import {globalStyles} from '../../../../styles/global.styles';
import {
  CategoryTitle,
  CategoryAttributes,
  TitleFieldButton,
} from './components';
import useCategoryState from './useCategoryState';

const Category: React.VFC<iCategoryProps> = ({categoryId, categoryIndex}) => {
  const {handleAddField, handleRemoveCategory} = useCategoryState({
    categoryId,
    categoryIndex,
  });

  return (
    <Card style={[globalStyles.mb16, globalStyles.cardContainer]}>
      <CategoryTitle categoryId={categoryId} categoryIndex={categoryIndex} />
      <CategoryAttributes
        categoryId={categoryId}
        categoryIndex={categoryIndex}
      />
      <View style={[globalStyles.col, globalStyles.mt8]}>
        <TitleFieldButton
          categoryId={categoryId}
          categoryIndex={categoryIndex}
        />
        <Button
          mode="contained"
          onPress={handleAddField}
          style={[globalStyles.flex1, globalStyles.mt8]}>
          Add New Field
        </Button>
        <Button
          mode="contained"
          color="red"
          onPress={handleRemoveCategory}
          style={[globalStyles.mt8, globalStyles.bgDanger]}>
          Delete Category
        </Button>
      </View>
    </Card>
  );
};

export default React.memo(Category);
