// typings/native-wind.d.ts
import { ViewProps, TextProps } from "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }
}
