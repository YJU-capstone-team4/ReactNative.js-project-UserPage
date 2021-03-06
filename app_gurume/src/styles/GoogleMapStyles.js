import styled from 'styled-components'

// import styles
import { Colors } from './index'

export const MarkerTitleContainer = styled.View`
        margin-top: 5px;
        padding: 1px 7px;
        background-color: ${Colors.WHITE};
        border-color: ${Colors.RED_3};
        border-width: 2px;
        border-radius: 25px;
        display: flex;
        flex-direction:row;
`

export const MarkerContainer = styled.View`
    display: flex;
    align-items: center;
`

export const CustomMarker = styled.Image`
    width: 40px;
    height: 40px;
    margin-top: 5px;
`