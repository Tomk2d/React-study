import React, {useState, useContext, createContext} from "react";

const ThemeContext = createContext();        // createContext를 사용하여, 어디에 있던 이값을 사용할 수 있음.

export function ThemeProvider ({children}){
    const [theme, setTheme] = useState("light");        // theme 기본값 light

    const toggleTheme = ()=>{
        setTheme(prevTheme => prevTheme === "light" ? "dark":"light");      //  theme 가 light 면 dark 로, 아니면 light 로.
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(){     //  사용자 정의 훅. 내가 만들어서 사용하는거.
    const {theme, toggleTheme} = useContext(ThemeContext)   // theme 이라는 변수와 toggleTheme 라는 함수를 사용할 수 있다.
    return {theme, toggleTheme}
}