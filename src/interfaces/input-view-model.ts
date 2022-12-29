export interface InputViewModel {
  GetValue(): string;
  SetValue(newValue: string): void;
  OnChange(callback: (newValue: string) => void): void;
  readonly label: string;
  readonly placeholder: string;
  readonly type: string;
}
