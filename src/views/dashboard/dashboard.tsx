import { InputComponent, InputBuilder } from "@/core/presenter/components/shared/input";
import { useBuilder } from "@/core/presenter/hooks/use-builder";
import { useViewModel } from "@/core/presenter/hooks/use-view-model/use-view-model";
import { DisplayBoxView, DisplayBoxViewModel } from '@/features/display-box';
import React from "react";

const nameBuilder = () => new InputBuilder().AddLabel("Name").AddPlaceholder("Enter your name");
const passwordBuilder = () => new InputBuilder().AddLabel("Password").AddPlaceholder("Enter your password");
const displayBoxBuilder = () => new DisplayBoxViewModel();

export function DashboardView() {
  const name = useBuilder(nameBuilder);
  const password = useBuilder(passwordBuilder);
  const displayBox = useViewModel(displayBoxBuilder);

  return (
    <div>
      <InputComponent viewModel={name} />
      <InputComponent viewModel={password} />
      <DisplayBoxView viewModel={displayBox} />
    </div>
  );
}
