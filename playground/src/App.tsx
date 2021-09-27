import React, { useEffect } from "react";
import { Game, Senario, Style, Text, Chapter, useHistory } from "@advx/engine";
import "./App.css";

function Senario1() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/2");
      console.log(history);
    }, 2000);
  }, []);
  return (
    <Senario>
      <Text>{`プレーンテキスト1`}</Text>
      <Text>{`プレーンテキスト2`}</Text>
      <Text>{`プレーンテキスト3`}</Text>
      <Text>
        <Style color="red">色付き</Style>テキスト
      </Text>
    </Senario>
  );
}
function Senario2() {
  return (
    <Senario>
      <Text>{`プレーンテキスト123`}</Text>
    </Senario>
  );
}

function App() {
  return (
    <Game>
      <Chapter path="/" component={Senario1} />
      <Chapter path="/2" component={Senario2} />
    </Game>
  );
}

export default App;
