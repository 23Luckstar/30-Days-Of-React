// useEffect 是一个 React Hook，它允许你 将组件与外部系统同步
/**
 * 
 * 连接到外部系统
在自定义 Hook 中封装 Effect
控制非 React 小部件
使用 Effect 请求数据
指定响应式依赖项
在 Effect 中根据先前 state 更新 state
删除不必要的对象依赖项
删除不必要的函数依赖项
从 Effect 读取最新的 props 和 state
在服务器和客户端上显示不同的内容
疑难解答
Effect 在组件挂载时运行了两次
Effect 在每次重新渲染后都运行
Effect 函数一直在无限循环中运行
即使组件没有卸载，cleanup 逻辑也会运行
我的 Effect 做了一些视觉相关的事情，在它运行之前我看到了一个闪烁
 */
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
