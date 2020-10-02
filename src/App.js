import React, { useState } from "react";
import TextAddition from "./TextAddition";
import Fortune from "./Fortune";
import Input from '@material-ui/core/Input';
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  root: {
    display: "flex", //js이기 때문에 문자열로 처리, css는 없어도 됨
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",

  }
})

const Bubble = ({children}) => {
  return <div className="bubble">{children}</div>
}

const App = () => {
  const classes = useStyles()

  const [messages, setMessages] = useState(["도원님 사랑해요", "오도원은 오늘 행운이 가득한 날이다!", "오도가 항상 행복했으면 좋겠어", "오도 우리 사르르 먹으러 갈래?", "오도 보고 싶당", "너 지금 내 생각 하고 있지?", "앞으로 영상 통화는 절대 안 할 거야", "나 귀엽징", "오늘은 현지랑 데이트하는 날!", "현지랑 보드게임 할 사람~", "오늘 밤에 맛있는 거 먹으러 가자", "해운대 갈까? 서면 갈까?"]);
  const [selectedMessage, setSelectedMessage] = useState("유니콘을 눌러주세요");

  const handleMessageAdd = (text) => {
    setMessages([...messages, text]);
  }

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    console.log(messages[randomIndex])
    setSelectedMessage(messages[randomIndex])
    setTimeout(() => {
      setSelectedMessage("유니콘을 눌러주세요")
    }, 8000);  
  }

  return ( 
    <div className={classes.root}>
      {/* <TextAddition messages={messages} onMessageAdd={handleMessageAdd} /> */}
      <Fortune onClick={handleClick} />
      <Bubble>{selectedMessage}</Bubble>
    <div></div>
    </div>
  );
};

export default App;
