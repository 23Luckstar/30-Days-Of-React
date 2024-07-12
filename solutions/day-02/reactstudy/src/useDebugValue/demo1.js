import { useSyncExternalStore, useDebugValue } from "react";
function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  const test = useDebugValue(new Date(), (date) => date.toDateString());
  return (
    <h1>
      {isOnline ? "✅ Online" : "❌ Disconnected"} {test}
    </h1>
  );
}

export default function App() {
  return <StatusBar />;
}
