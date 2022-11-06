import { CardContainer } from "./styles";

type CardProps = {
    text: string
}

export const Card = ( { text }: { text:string }) => {
    return <CardContainer> {text}</CardContainer>
}