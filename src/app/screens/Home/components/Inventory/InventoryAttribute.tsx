import * as React from 'react';
import {iInventoryUIAttributeProps} from './types';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, Switch} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {styles} from './styles';

const InventoryAttribute: React.VFC<iInventoryUIAttributeProps> = ({
  attribute,
  value,
  onChange,
}) => {
  const [datePickerVisible, setDatePickerVisibility] = React.useState(false);

  const closeDatepicker = React.useCallback(() => {
    setDatePickerVisibility(false);
  }, []);

  const showDatepicker = React.useCallback(() => {
    setDatePickerVisibility(true);
  }, []);

  const handleDateChange = React.useCallback(
    (date: Date) => {
      onChange(attribute.id, date.toDateString());
      closeDatepicker();
    },
    [attribute, onChange, closeDatepicker],
  );

  const handleTextInputChange = React.useCallback(
    (newValue: string) => {
      onChange(attribute.id, newValue);
    },
    [attribute, onChange],
  );

  const handleNumberInputChange = React.useCallback(
    (newValue: string) => {
      onChange(attribute.id, parseFloat(newValue));
    },
    [attribute, onChange],
  );

  const handleBooleanInputChange = React.useCallback(
    (newValue: boolean) => {
      onChange(attribute.id, newValue);
    },
    [attribute, onChange],
  );

  const attributeValueComponent = React.useMemo(() => {
    switch (attribute.type) {
      case 'TEXT':
        return (
          <TextInput
            value={value as string}
            onChangeText={handleTextInputChange}
          />
        );
      case 'BOOLEAN':
        return (
          <Switch
            value={value as boolean}
            onValueChange={handleBooleanInputChange}
          />
        );
      case 'DATE':
        const date = value ? new Date(value as string) : new Date();
        return (
          <View>
            <TouchableOpacity onPress={showDatepicker}>
              <TextInput
                value={value as string}
                placeholder="Pick date"
                pointerEvents="none"
                editable={false}
              />
            </TouchableOpacity>
            <DatePicker
              modal
              open={datePickerVisible}
              date={date}
              onConfirm={handleDateChange}
              onCancel={closeDatepicker}
            />
          </View>
        );
      case 'NUMBER':
        return (
          <TextInput
            value={value ? value.toString() : undefined}
            keyboardType="number-pad"
            onChangeText={handleNumberInputChange}
          />
        );
    }
  }, [
    attribute,
    value,
    datePickerVisible,
    showDatepicker,
    closeDatepicker,
    handleDateChange,
    handleBooleanInputChange,
    handleTextInputChange,
    handleNumberInputChange,
  ]);

  return (
    <View style={styles.container}>
      <Text variant="bodyMedium" style={styles.label}>
        {attribute.title}
      </Text>
      <View style={styles.value}>{attributeValueComponent}</View>
    </View>
  );
};

export default InventoryAttribute;
