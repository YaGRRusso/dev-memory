import Switch from 'react-switch'

export const ThemeSwitcher = ({ darkMode, setDarkMode }: any) => {
    const abc = darkMode

    return (
        <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!abc)}
        />
    )
}