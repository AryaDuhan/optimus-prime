'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function SplittingText({
  text,
  type = 'words',
  inView: inViewProp,
  motionVariants = {},
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (inViewProp !== undefined) {
      setShouldAnimate(inViewProp)
    } else {
      setShouldAnimate(isInView)
    }
  }, [isInView, inViewProp])

  const splitText = () => {
    if (type === 'words') {
      return text.split(' ').filter((word) => word.length > 0)
    } else if (type === 'chars') {
      return text.split('').filter((char) => char.trim().length > 0)
    } else {
      return text.split('\n')
    }
  }

  const parts = splitText()

  const defaultVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0 },
    stagger: 0.1,
  }

  const variants = {
    initial: motionVariants.initial || defaultVariants.initial,
    animate: shouldAnimate
      ? motionVariants.animate || defaultVariants.animate
      : motionVariants.initial || defaultVariants.initial,
    transition: {
      duration: motionVariants.transition?.duration || defaultVariants.transition.duration,
      delay: motionVariants.transition?.delay || defaultVariants.transition.delay,
    },
    stagger: motionVariants.stagger || defaultVariants.stagger,
  }

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {parts.map((part, index) => (
        <motion.span
          key={index}
          initial={variants.initial}
          animate={variants.animate}
          transition={{
            ...variants.transition,
            delay: index * variants.stagger,
          }}
          style={{ display: 'inline-block', marginRight: type === 'words' ? '0.25em' : '0' }}
        >
          {part}
          {type === 'words' && index < parts.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}
