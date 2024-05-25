import { Colors } from '@/constants/Colors';
import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

interface InputProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  placeholder?: string;
  variant?: 'outline' | 'filled' | 'underlined' | 'unstyled' | 'rounded';
  isLoading?: boolean;
  icon?: React.ReactElement<any>; 
  isPassword?: boolean;
  isRequired?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  validation?: (value: string) => string | null; 
}

const Input: React.FC<InputProps> = ({
  size = 'md',
  placeholder,
  variant = 'filled',
  isLoading,
  icon,
  isPassword = false,
  isRequired = false,
  value,
  onChangeText,
  validation,
}) => {
  const inputRef = useRef<TextInput>(null);
  const [hasError, setHasError] = useState(false);

  const handleOnChange = (text: string) => {
    onChangeText(text);
    if (validation) {
      const error = validation(text);
      setHasError(!!error); // Set hasError to true if validation fails
    } else {
      setHasError(false);
    }
  };

  const getStyles = () => {

    let baseStyles;

    switch (variant) {
      case 'outline':
        baseStyles = styles.outline;
        break;
      case 'filled':
        baseStyles = styles.filled;
        break;
      case 'underlined':
        baseStyles = styles.underline;
        break;
      case 'unstyled':
        baseStyles = styles.unstyled;
        break;
      case 'rounded':
        baseStyles = styles.rounded;
        break;
      default:
        baseStyles = styles.filled; // Default to filled
    }

    switch (size) {
      case 'xs':
        return { ...baseStyles, fontSize: 12,   paddingLeft: icon ? 40 : 15, paddingRight: 25,};
      case 'sm':
        return { ...baseStyles, fontSize: 14, paddingLeft: icon ? 40 : 15, paddingRight: 25, };
      case 'md':
        return { ...baseStyles, fontSize: 16, paddingLeft: icon ? 40 : 15, paddingRight: 25, };
      case 'lg':
        return { ...baseStyles, fontSize: 18, paddingLeft: icon ? 40 : 15, paddingRight: 25, };
      case 'xl':
        return { ...baseStyles, fontSize: 20 , paddingLeft: icon ? 40 : 15, paddingRight: 25,};
      case '2xl':
        return { ...baseStyles, fontSize: 24, paddingLeft: icon ? 40 : 15, paddingRight: 25, };
      default:
        return baseStyles;
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator style={styles.loading} />}
     {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        ref={inputRef}
        style={[styles.input, getStyles()]}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={handleOnChange}
        onBlur={() => {
          if (validation && isRequired && !value) {
            setHasError(true); 
          }
        }}
      />
      {isRequired && <Text style={styles.required}>{hasError ? 'This field is required' : ''}</Text>}
      {hasError && validation && <Text style={styles.error}>{validation(value)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    // marginHorizontal: "13%",
  },
  loading: {
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    marginRight: 10,
    marginLeft: 15,
    zIndex: 1,
    color: 'white',
  },
  input: {
    flex: 1,
    color: 'black',
  },
  required: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightprimaryColor,
    paddingVertical: 9,
  },
  
  filled: {
    backgroundColor: "#fceaea",
    paddingVertical: 9,
    borderRadius: 10,
  
  },
  outline: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.lightprimaryColor,
    paddingVertical: 9,
    borderRadius: 10,
  },
  unstyled: {},
  rounded: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightprimaryColor,
    paddingVertical: 9,
  },
});

export default Input;
