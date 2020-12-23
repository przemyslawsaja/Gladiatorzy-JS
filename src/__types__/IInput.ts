import { FieldError } from "react-hook-form";
//TODO: fix 'any' typing
export interface IInput  {
  label: string,
  id: string,
  register: any;
  error: FieldError | undefined;
  type: string,
}