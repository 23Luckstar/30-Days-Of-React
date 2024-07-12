import { useId } from "react";

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        密码:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>密码应该包含至少 18 个字符</p>
    </>
  );
}

function Form() {
  const id = useId();
  return (
    <form>
      <label htmlFor={id + "-firstName"}>名字：</label>
      <input id={id + "-firstName"} type="text" />
      <hr />
      <label htmlFor={id + "-lastName"}>姓氏：</label>
      <input id={id + "-lastName"} type="text" />
    </form>
  );
}

export default function App() {
  return (
    <>
      <h2>输入密码</h2>
      <PasswordField />
      <h2>验证密码</h2>
      <PasswordField />
      <hr />
      <Form />
    </>
  );
}
