import * as C from './App.style'
import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { ThemeSwitcher } from './components/Switch'
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme'

import LogoDark from './assets/logo-dark.png'
import LogoLight from './assets/logo-light.png'
import RestartImg from './assets/svgs/restart.svg'

import { Game } from './components/Game'
import { InfoItem } from './components/InfoItem'
import { Button } from './components/Button'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleReset = () => {
    alert('Restart')
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <C.Container>
        <C.InfoArea>
          <C.Header>
            <img src={darkMode ? LogoDark : LogoLight} alt="DevMemory" />
            <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
          </C.Header>
          <InfoItem label='Tempo' value='00:00' />
          <InfoItem label='Tentativas' value='0' />
          <Button title='Reiniciar' icon={RestartImg} onClick={handleReset} />
        </C.InfoArea>
        <C.GameArea>
          <Game />
        </C.GameArea>
      </C.Container>
    </ThemeProvider>
  )
}