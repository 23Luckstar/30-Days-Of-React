// 如果基础数据如 currentUser 没有更改，则不需要重新渲染它们。为了帮助 React 利用这一点，你可以使用 useCallback 包装 login 函数，并将对象创建包装到 useMemo 中。这是一个性能优化的例子
import { useCallback, useMemo } from "react";

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser,
      login,
    }),
    [currentUser, login]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
