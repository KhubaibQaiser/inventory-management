import * as React from 'react';
import {Card, TextInput, Button, Text, IconButton} from 'react-native-paper';
import {iCategoryProps, iAttributeChangeHandler} from './types';
import {View} from 'react-native';
import CategoryAttribute from './CategoryAttribute';

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
    <Card>
      <Card.Content>
        <View style={{flexDirection: 'row'}}>
          <Text variant="headlineLarge" style={{flex: 1}}>
            {category.title}
          </Text>
          <IconButton icon="delete" onPress={handleRemoveCategory} />
        </View>

        <TextInput value={category.title} onChangeText={handleTitleChange} />
        <View>
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
        </View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleAddField}>Add New Field</Button>
      </Card.Actions>
    </Card>
  );
};

export default React.memo(Category);
