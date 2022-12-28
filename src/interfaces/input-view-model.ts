export interface InputViewModel {
  GetValue(): string;
  SetValue(newValue: string): void;
  OnChange(callback: (newValue: string) => void): void;
}
