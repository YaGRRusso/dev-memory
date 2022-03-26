import { GridItemType } from '../../types'
import * as C from './style'
import { items as gameItems } from '../../data/items'

import b7Img from '../../assets/svgs/b7.svg'

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridCard = ({ item, onClick }: Props) => {
    return (
        <C.Container shown={item.complete || item.shown} onClick={onClick}>
            {!item.complete && !item.shown &&
                <img src={b7Img} alt="fundo" />
            }
            {(item.complete || item.shown) && item.item !== null &&
                <img src={gameItems[item.item].icon} alt="imagem" />
            }
        </C.Container>
    )
}