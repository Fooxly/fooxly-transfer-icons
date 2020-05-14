import { SvgXml } from 'react-native-svg'

const Wrapper = (i, props) => {
  return (
    <SvgXml
      width={props.s ?? 24}
      height={props.s ?? 24}
      xml={i}
    />
  )
}

import FigmaSvg from './icons/figma.svg'
export const Figma = props => Wrapper(FigmaSvg, props)
