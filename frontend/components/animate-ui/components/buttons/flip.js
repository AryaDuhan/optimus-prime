'use client'

import * as React from 'react'
import {
  FlipButton as FlipButtonPrimitive,
  FlipButtonFront as FlipButtonFrontPrimitive,
  FlipButtonBack as FlipButtonBackPrimitive,
} from '@/components/animate-ui/primitives/buttons/flip'
import { cn } from '@/lib/utils'

export function FlipButton({ className, ...props }) {
  return (
    <FlipButtonPrimitive
      className={cn(className)}
      {...props}
    />
  )
}

export function FlipButtonFront({
  className,
  ...props
}) {
  return (
    <FlipButtonFrontPrimitive
      className={cn(className)}
      {...props}
    />
  )
}

export function FlipButtonBack({
  className,
  ...props
}) {
  return (
    <FlipButtonBackPrimitive
      className={cn(className)}
      {...props}
    />
  )
}
