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

import Access from './icons/access.svg'
export const AccessIcon = props => Wrapper(Access, props)
import Excel from './icons/excel.svg'
export const ExcelIcon = props => Wrapper(Excel, props)
import Figma from './icons/figma.svg'
export const FigmaIcon = props => Wrapper(Figma, props)
import Illustrator from './icons/illustrator.svg'
export const IllustratorIcon = props => Wrapper(Illustrator, props)
import Photoshop from './icons/photoshop.svg'
export const PhotoshopIcon = props => Wrapper(Photoshop, props)
import Powerpoint from './icons/powerpoint.svg'
export const PowerpointIcon = props => Wrapper(Powerpoint, props)
import Sketch from './icons/sketch.svg'
export const SketchIcon = props => Wrapper(Sketch, props)
import Word from './icons/word.svg'
export const WordIcon = props => Wrapper(Word, props)
