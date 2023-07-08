import { useEffect, useState } from "react";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./header/Header";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#000]  text-slate-50" : null
        }`}
      >
        <Header />
        <HomeScreen />
        {/* <h1>Hi there we will build this beautiful design ...</h1> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
