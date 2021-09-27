import React, { useEffect } from "react";
import { useContextBridge } from "../hooks/useContextBridge";
import {
  MessageContext,
  MessageProvider,
  useMessage,
} from "../hooks/useMessage";
import { render } from "../reconciler/renderer";
import { Screen } from "./Screen";

export type GameProps = {
  children: React.ReactNode;
};

function SenarioRenderer({ children }: GameProps) {
  const message = useMessage();
  const ContextBridge = useContextBridge(MessageContext);
  useEffect(() => {
    const unmount = render(
      <ContextBridge>{children}</ContextBridge>,
      (containerInfo) => {
        message.setMessages(containerInfo);
      }
    );
    return () => unmount();
  }, [children]);
  return null;
}

export function Game({ children }: GameProps) {
  return (
    <MessageProvider>
      <Screen />
      <SenarioRenderer>{children}</SenarioRenderer>
    </MessageProvider>
  );
}
