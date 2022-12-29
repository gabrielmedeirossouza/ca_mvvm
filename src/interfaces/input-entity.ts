export type InputType = 'text' | 'password' | 'numeric'

export interface InputEntity {
  label: string;
  placeholder: string;
  type: InputType;
  GetValue(): string;
  SetValue(newValue: string): void;
}
