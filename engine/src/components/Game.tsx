import React from "react";
import { CommandProvider } from "../hooks/useCommand";
import { ChoiceProvider } from "../hooks/useChoice";
import { WindowSizeProvider } from "../hooks/useWindowSize";

export type GameProps = {
  children: React.ReactNode;
};

export function Game({ children }: GameProps) {
  return (
    <CommandProvider>
      <ChoiceProvider>
        <WindowSizeProvider>{children}</WindowSizeProvider>
      </ChoiceProvider>
    </CommandProvider>
  );
}
