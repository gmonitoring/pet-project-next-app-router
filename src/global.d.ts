declare module '*.ttf'
declare module '*.png'
declare module '*.jpg'
declare module '*.module.css'
declare module '*.scss'
declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default ReactComponent
}
