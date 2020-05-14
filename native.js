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

import AccessSvg from './icons/access.svg'
export const Access = props => Wrapper(AccessSvg, props)
import AiSvg from './icons/ai.svg'
export const Ai = props => Wrapper(AiSvg, props)
import ExcelSvg from './icons/excel.svg'
export const Excel = props => Wrapper(ExcelSvg, props)
import FigmaSvg from './icons/figma.svg'
export const Figma = props => Wrapper(FigmaSvg, props)
import PhotoshopSvg from './icons/photoshop.svg'
export const Photoshop = props => Wrapper(PhotoshopSvg, props)
import PowerpointSvg from './icons/powerpoint.svg'
export const Powerpoint = props => Wrapper(PowerpointSvg, props)
import SketchSvg from './icons/sketch.svg'
export const Sketch = props => Wrapper(SketchSvg, props)
import WordSvg from './icons/word.svg'
export const Word = props => Wrapper(WordSvg, props)
