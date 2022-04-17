export interface ButtonProps {
  name: string
  size: 'lg' | 'md' | 'sm'
  type: 'button' | 'submit' | 'reset'
  loader?: boolean
  sx?: any
  disabled?: boolean
  target?: string
  startIcon?: any
  endIcon?: any
  onClick?: any
}
