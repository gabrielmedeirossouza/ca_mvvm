import { Builder } from '@/core/entities/builder';
import { InputViewModel } from './input-view-model';

export class InputBuilder extends Builder<InputViewModel> {
  private _inputViewModel: InputViewModel;

  constructor() {
    super();
    this._inputViewModel = new InputViewModel();
  }

  public AddLabel(label: string): InputBuilder {
    this._inputViewModel.label = label;

    return this;
  }

  public AddPlaceholder(placeholder: string): InputBuilder {
    this._inputViewModel.placeholder = placeholder;

    return this;
  }

  public AddDisabled(disabled: boolean): InputBuilder {
    this._inputViewModel.disabled = disabled;

    return this;
  }

  public AddValue(value: string): InputBuilder {
    this._inputViewModel.value = value;

    return this;
  }

  public Build(): InputViewModel {
    return this._inputViewModel;
  }
}
