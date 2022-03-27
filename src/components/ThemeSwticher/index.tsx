import * as C from './style'

type Props = {
    darkTheme: boolean,
    onClick: () => void
}

export const ThemeSwitcher = ({ darkTheme, onClick }: Props) => {
    return (
        <C.Container onClick={onClick} active={darkTheme} />
    )
}