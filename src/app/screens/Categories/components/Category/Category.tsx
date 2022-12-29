import * as React from 'react';
import {Card, Button, Text, IconButton} from 'react-native-paper';
import {iCategoryProps, iAttributeChangeHandler} from './types';
import {View} from 'react-native';
import CategoryAttribute from './CategoryAttribute';
import {globalStyles} from '../../../../styles/global.styles';
import {Input} from '../../../../components';

const Category: React.VFC<iCategoryProps> = ({
  category,
  onChange,
  onRemoveCategory,
  onAddAttribute,
  onRemoveAttribute,
}) => {
  const handleAddField = React.useCallback(() => {
    onAddAttribute();
  }, [onAddAttribute]);

  const handleAttributeChange: iAttributeChangeHandler = React.useCallback(
    attribute => {
      onChange({
        ...category,
        attributes: category.attributes.map(attr => {
          if (attr.id === attribute.id) {
            return attribute;
          }
          return attr;
        }),
      });
    },
    [onChange, category],
  );

  const handleTitleChange = React.useCallback(
    (title: string) => {
      onChange({...category, title});
    },
    [onChange, category],
  );

  const handleRemoveCategory = React.useCallback(() => {
    onRemoveCategory(category);
  }, [onRemoveCategory, category]);

  return (
    <Card style={[globalStyles.mb16, globalStyles.cardContainer]}>
      <View
        style={[
          globalStyles.row,
          globalStyles.justifySpaceBetween,
          globalStyles.itemsCenter,
        ]}>
        <Text style={[globalStyles.mr8, globalStyles.labelText]}>
          {category.title}
        </Text>
        <IconButton icon="delete" onPress={handleRemoveCategory} />
      </View>

      <Input
        label="Title"
        value={category.title}
        onChangeText={handleTitleChange}
        style={globalStyles.mb8}
      />
      {category.attributes.map(attr => {
        return (
          <CategoryAttribute
            key={attr.id}
            attribute={attr}
            onChange={handleAttributeChange}
            onRemove={onRemoveAttribute}
          />
        );
      })}
      <View>
        <Button
          mode="contained"
          onPress={handleAddField}
          style={[globalStyles.flex1, globalStyles.mt8]}>
          Add New Field
        </Button>
      </View>
    </Card>
  );
};

export default React.memo(Category);
