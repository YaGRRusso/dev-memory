import * as C from './style'

type Props = {
    label: string,
    value: string
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <C.Container>
            <label>{label}</label>
            <div>{value}</div>
        </C.Container>
    )
}