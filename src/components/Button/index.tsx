import * as C from './style'

type Props = {
    title: string,
    icon: any,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({ title, icon, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            <img src={icon} alt={title} />
            <div>{title}</div>
        </C.Container>
    )
}