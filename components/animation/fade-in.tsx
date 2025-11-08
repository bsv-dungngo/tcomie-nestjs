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
}

export const FadeIn = ({
  children,
  xInitial = 0,
  xAfter = 0,
  yAfter = 0,
  yInitial = 0,
  delay = 0,
  viewport = false,
}: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial, y: yInitial }}
      transition={{ duration: 1, delay: delay }}
      whileInView={{ opacity: 1, x: xAfter, y: yAfter }}
      viewport={{ once: viewport }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
