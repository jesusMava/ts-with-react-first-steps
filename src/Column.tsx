import { ColumnContainer, ColumnTitle, CardContainer } from "./styles"
import  { Card } from "./Card";

// You can use a type or an interface to define the form of your props object
type ColumnProps = {
    text: string
}
// By default all the fields you define on your types are required.
// It means that if the field will be missing you will get a type error.
// To make the field optional you can add a question mark before the colon:
// type Example = { someField?: string }

//destructure the props objectto get the text field from it
export const Column = ({ text }: ColumnProps) => {
    return(
        <ColumnContainer>
           <ColumnTitle> { text } </ColumnTitle>
            <Card text= 'Gererate app scaffold' />
            <Card text = 'Learn Typescript' />
            <Card text='Begin to use static typing' />
        </ColumnContainer>
    )
}