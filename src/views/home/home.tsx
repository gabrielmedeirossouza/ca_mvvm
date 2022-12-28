import React from 'react';
import { InputViewModel } from '../../view-models/input-view-model';
import { InputComponent } from '../../components/input-component';

export function Home() {
  const inputViewModel = new InputViewModel();

  React.useEffect(() => {
    setTimeout(() => {
      inputViewModel.SetValue("O rato roeu a roupa do rei de roma");
    }, 2500);

    inputViewModel.OnChange((value) => {
      console.log(
        "Atualizou na view:",
        value
      );
    });
  });

  return (
    <div>
      <InputComponent viewModel={inputViewModel} />
    </div>
  );
};
