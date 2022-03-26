import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    primaryColor: '#121212',
    secondaryColor: '#12121299',
    backgroundColor: '#f2f2f2'
};

export const darkTheme: DefaultTheme = {
    primaryColor: '#f2f2f2',
    secondaryColor: '#f2f2f299',
    backgroundColor: '#121212'
};

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.backgroundColor};
    }
`