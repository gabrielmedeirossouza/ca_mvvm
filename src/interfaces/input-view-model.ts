export interface InputViewModel {
  getValue(): string;
  setValue(newValue: string): void;
  onChange(callback: (newValue: string) => void): void;
}