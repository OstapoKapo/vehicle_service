import { RegisterOptions } from "react-hook-form";

export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  rules: RegisterOptions;
}