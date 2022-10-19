import {TitleHeader, Div, Img, H4} from './styled'

export const Header = (props) => {

    return(
        <Div>
            <Img src={props.img}></Img>
            <H4>{props.usuario}</H4>
            <TitleHeader>
                Insta4
            </TitleHeader>
        </Div>
    )
}