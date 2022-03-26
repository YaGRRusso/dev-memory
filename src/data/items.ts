import androidImg from '../assets/svgs/android.svg'
import caminhaoImg from '../assets/svgs/caminhao.svg'
import disneyImg from '../assets/svgs/disney.svg'
import estrelaImg from '../assets/svgs/estrela.svg'
import gasolinaImg from '../assets/svgs/gasolina.svg'
import motoImg from '../assets/svgs/moto.svg'

type Props = {
    name: string,
    icon: string
}

export const items: Props[] = [
    { name: 'android', icon: androidImg },
    { name: 'caminhao', icon: caminhaoImg },
    { name: 'disney', icon: disneyImg },
    { name: 'estrela', icon: estrelaImg },
    { name: 'gasolina', icon: gasolinaImg },
    { name: 'moto', icon: motoImg }
]