import React, { FC, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "zxl";
  variant?: "solid" | "subtle" | "outline" | "link" | "ghost" | "unstyled";
  onPress?: () => void;
  children: React.ReactNode;
  loading?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  size = "md",
  variant = "solid",
  onPress,
  children,
  loading,
  icon,
  disabled,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    if (onPress && !disabled) {
      setIsLoading(true); // Simulate loading state for demonstration
      Promise.resolve(onPress()) // Ensure onPress returns a Promise
        .then(() => setIsLoading(false)) // Clear loading state after action
        .catch(() => setIsLoading(false)); // Clear loading state on error
    }
  };

  const getStyles = () => {
    const baseStyles = styles.button;
    let variantStyles;

    switch (variant) {
      case "solid":
        variantStyles = styles.solid;
        break;
      case "subtle":
        variantStyles = styles.subtle;
        break;
      case "outline":
        variantStyles = styles.outline;
        break;
      case "link":
        variantStyles = styles.link;
        break;
      case "ghost":
        variantStyles = styles.ghost;
        break;
      case "unstyled":
        variantStyles = {};
        break;
      default:
        variantStyles = styles.solid; // Default to solid
    }

    let sizeStyles;

    switch (size) {
      case "xs":
        sizeStyles = styles.xs;
        break;
      case "sm":
        sizeStyles = styles.sm;
        break;
      case "md":
        sizeStyles = styles.md;
        break;
      case "lg":
        sizeStyles = styles.lg;
      case "xl":
        sizeStyles = styles.xl;
      case "zxl":
        sizeStyles = styles.zxl;
        break;
      default:
        sizeStyles = styles.md; // Default to medium
    }

    return [baseStyles, variantStyles, sizeStyles, disabled && styles.disabled];
  };

  return (
    <Pressable disabled={disabled} onPress={handlePress} style={getStyles()}>
      {loading && <View style={styles.loading}>{loading}</View>}
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    marginHorizontal: "13%",
    borderRadius: 4,
  },
  solid: {
    backgroundColor: "blue",
  },
  subtle: {
    backgroundColor: "lightgray",
  },
  outline: {
    borderWidth: 1,
    borderColor: "blue",
  },
  link: {
    color: "blue",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  unstyled: {},
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  loading: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  xs:{
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 12,
    borderRadius: 2,
  },
  sm:{
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
    borderRadius: 4,
  },
  md:{
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 6,
  },
  lg:{
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 18,
    borderRadius: 8,
  },
  xl:{
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 20,
    borderRadius: 10,
  },
  zxl:{
    paddingHorizontal: 28,
    paddingVertical: 20,
    fontSize: 22,
    borderRadius: 12,
  },
  
});

export default Button;
