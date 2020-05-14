import SvgUri from 'react-native-svg-uri'

const Wrapper = (i, props) => {
  <SvgUri
    width={props.s ?? 24}
    height={props.s ?? 24}
    source={i}
  />
}

export const Figma = props => Wrapper(require('./icons/figma.svg'), props)
