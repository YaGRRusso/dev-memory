// React, Data e Types
import { useEffect, useState } from 'react'
import { items as gameItems, items } from './data/items'
import { GridItemType } from './types'

// Tema
import * as C from './App.style'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme'

// Imagens
import LogoDark from './assets/logo-dark.png'
import LogoLight from './assets/logo-light.png'
import RestartImg from './assets/svgs/restart.svg'

// Components
import { InfoItem } from './components/InfoItem'
import { Button } from './components/Button'
import { GridCard } from './components/GridCard'
import { formatTime } from './helpers/formatTime'

export default function () {
  const [darkMode, setDarkMode] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [moves, setMoves] = useState(0)
  const [showing, setShowing] = useState(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  // Inicar Jogo
  useEffect(() => { handleReset() }, [])

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTime(time + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [playing, time])

  const handleReset = () => {
    // Resetar Jogo
    setTime(0)
    setMoves(0)
    setShowing(0)

    // Criar Grid
    let tmpGrid: GridItemType[] = []
    for (let i = 0; i < (gameItems.length * 2); i++) {
      tmpGrid.push({ item: null, shown: false, complete: false })
    }
    for (let x = 0; x < 2; x++) {
      for (let i = 0; i < gameItems.length; i++) {
        let randomPos = -1
        while (randomPos < 0 || tmpGrid[randomPos].item !== null) {
          randomPos = Math.floor(Math.random() * (gameItems.length * 2))
        }
        tmpGrid[randomPos].item = i
      }
    }
    setGridItems(tmpGrid)

    // Reiniciar Jogo
    setPlaying(true)
  }

  // Checagem de Cartas
  useEffect(() => {
    if (showing === 2) {
      let opened = gridItems.filter(item => item.shown)
      if (opened.length === 2) {

        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems]
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].complete = true;
              tmpGrid[i].shown = false
            }
          }
          setGridItems(tmpGrid)
          setShowing(0)
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems]
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false
            }
            setGridItems(tmpGrid)
            setShowing(0)
          }, 750)
        }
        setMoves(moves + 1)
      }
    }
  }, [showing, gridItems])

  // Checar se Venceu
  useEffect(() => {
    if (moves > 0 && gridItems.every(item => item.complete)) {
      setPlaying(false)
    }
  }, [moves])

  const handleItemClick = (index: number) => {
    if (playing && index !== null && showing < 2) {
      let tmpGrid = [...gridItems]

      if (!tmpGrid[index].complete || !tmpGrid[index].shown) {
        tmpGrid[index].shown = true
        setShowing(showing + 1)
      }
      setGridItems(tmpGrid)
    }
  }

  const teste = () => {

  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <C.Container>
        <C.InfoArea>
          <C.Header>
            <img src={darkMode ? LogoDark : LogoLight} alt="DevMemory" />
            <button onClick={() => { setDarkMode(!darkMode) }}>Tema</button>
          </C.Header>
          <InfoItem label='Tempo' value={formatTime(time)} />
          <InfoItem label='Tentativas' value={`${moves}`} />
          <Button title='Reiniciar' icon={RestartImg} onClick={handleReset} />
        </C.InfoArea>
        <C.GridArea>
          <C.Grid>
            {/* {gridItems.map((item, index) => (
              <GridCard key={index} item={item} onClick={teste} />
            ))} */}
          </C.Grid>
        </C.GridArea>
      </C.Container>
    </ThemeProvider>
  )
}