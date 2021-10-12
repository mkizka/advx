import ReactReconciler from "react-reconciler";

export type ADVXCommand = TextCommand | ActionCommand;

export type TextCommand = {
  type: "Text";
  message: string; // いつか部分修飾を出来るようにする
};

export type ActionCommand = {
  type: "Action";
  action: () => void; // 選択肢の提示などなんらかの処理を実行する
};

export type HostConfig = ReactReconciler.HostConfig<
  ADVXCommand["type"], // Type
  any, // Props
  ADVXCommand[], // Container
  ADVXCommand, // Instance
  string, // TextInstance
  any,
  any,
  any,
  any,
  any[],
  any,
  any,
  -1
>;
