import React,{createContext, useContext,useState} from "react";

const ThemeContext = createContext(null);

function ThemeProvider(props){
    const [ themes,setThemes ] = useState({
        light:{
            primary : '#6750A4',
            onSurfaceVariant: '#49454F',
            onSurface: '#1C1B1F',
            outlineVariant:'#CAC4D0',
            scrim:'rgb(0,0,0,0.25)',
            onPrimary: '#ffffff',
            surface3: `linear-gradient(0deg, #FFFBFE, #FFFBFE),` +
                `linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11))`

        },
        dark: {
            primary : '#D0BCFF',
            onSurfaceVariant: '#CAC4D0',
            onSurface: '#E6E1E5',
            outlineVariant:'#49454F',
            scrim:'rgb(0,0,0,0.25)',
            onPrimary: '#381E72',
            surface3: 'linear-gradient(0deg, #1C1B1F, #1C1B1F),' +
                '    linear-gradient(0deg, rgba(208, 188, 255, 0.11), rgba(208, 188, 255, 0.11))'
        }
    })

    const [ theme,setTheme ] = useState( 'light' );

    let colors = (theme === 'dark' ? themes?.dark : themes?.light);

    return <ThemeContext.Provider {...props} value={[ colors ,setTheme ,setThemes ]}/>
}
function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) throw new Error('Not inside the provider.')
    return context; //returns [theme,updateTheme,updateColors]
}
export { ThemeProvider,useTheme }