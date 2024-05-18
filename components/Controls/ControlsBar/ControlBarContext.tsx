import { createContext, useContext } from 'react'
import { SpringValue } from '@react-spring/web'

type ControlsBarApi = {
  hovered: boolean
  width: number
  zoomLevel?: SpringValue
  setIsZooming: (isZooming: boolean) => void
}

export const ControlsBarContext = createContext<ControlsBarApi>({ width: 0, hovered: false, setIsZooming: () => {} })

export const useControlsBar = () => {
  return useContext(ControlsBarContext)
}
