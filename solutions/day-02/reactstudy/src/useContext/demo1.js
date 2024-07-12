import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
  // const [theme, setTheme] = useState("light");
  // const changeTheme = function () {
  //   console.log("12+++++");
  //   theme == "dark" ? setTheme("light") : setTheme("dark");
  // };
  // return (
  //   <ThemeContext.Provider value={theme}>
  //     <Form />
  //     <Button onClick={changeTheme}>Switch to light theme</Button>
  //   </ThemeContext.Provider>
  // );
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
