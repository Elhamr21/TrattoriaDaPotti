'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
