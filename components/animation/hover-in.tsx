import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  xInitial?: number
  xAfter?: number
  yInitial?: number
  yAfter?: number
  delay?: number
  viewport?: boolean
  slideStyle?: 'slide-up' | 'scale'
}

export const HoverIn = ({
  children,
  xInitial = 0,
  xAfter = 0,
  yAfter = 0,
  yInitial = 0,
  delay = 0,
  viewport = false,
  slideStyle = 'slide-up',
}: IProps) => {
  let styleSlideUp: any = { y: yInitial - 10, transition: { duration: 0.3 } }

  switch (slideStyle) {
    case 'scale':
      styleSlideUp = { scale: 1.1, transition: { duration: 0.3 } }
      break

    default:
      break
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yInitial, x: xInitial }}
      transition={{ duration: 0.8, delay: delay, ease: 'easeOut' }}
      whileHover={styleSlideUp} // Adjust the y value for the slide-up effect
      whileInView={{ opacity: 1, y: yAfter, x: xAfter }}
      viewport={{ once: viewport }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
