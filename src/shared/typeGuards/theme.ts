import { ThemeMode } from '@/shared/config/types'

export const isLightMode = (mode: string): mode is ThemeMode => {
  return mode === 'light'
}
export const isDarkMode = (mode: string): mode is ThemeMode => {
  return mode === 'dark'
}
