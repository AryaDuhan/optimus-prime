'use client'

import { useEffect, useState } from 'react'

export default function TypingText({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  textColors,
  variableSpeed,
  loop = true,
  colorRanges,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showCursorState, setShowCursorState] = useState(true)

  useEffect(() => {
    if (text.length === 0) return

    let timeoutId
    let cursorIntervalId

    const currentText = text[currentTextIndex]

    if (isPaused) {
      // Pause phase - wait before deleting or retyping
      timeoutId = setTimeout(() => {
        setIsPaused(false)
        if (isDeleting) {
          // After pause, start deleting
          setIsDeleting(true)
        } else if (!isTyping && !isDeleting) {
          // After pause, start typing
          setIsTyping(true)
        }
      }, pauseDuration)
    } else if (isDeleting) {
      // Deleting phase - backspace effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1))
        }, deletingSpeed)
      } else {
        // Finished deleting, pause then move to next text or restart
        setIsDeleting(false)
        setIsPaused(true)
        if (loop) {
          // Move to next text or loop back
          if (currentTextIndex < text.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1)
          } else {
            // Loop back to first
            setCurrentTextIndex(0)
          }
        } else {
          setIsTyping(false)
        }
      }
    } else if (isTyping) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        const speed = variableSpeed
          ? Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min
          : typingSpeed

        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, speed)
      } else {
        // Finished typing, pause before deleting
        setIsTyping(false)
        setIsPaused(true)
        setIsDeleting(true) // Prepare to delete after pause
      }
    }

    // Cursor blink effect - always visible, just blinking
    cursorIntervalId = setInterval(() => {
      setShowCursorState((prev) => !prev)
    }, 530)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(cursorIntervalId)
    }
  }, [
    displayedText,
    currentTextIndex,
    isTyping,
    isDeleting,
    isPaused,
    text,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
    loop,
    variableSpeed,
  ])

  // Get color for current character position
  const getColorForPosition = (position, fullText) => {
    if (colorRanges) {
      for (const range of colorRanges) {
        if (position >= range.start && position < range.end) {
          return range.color
        }
      }
    }
    return textColors?.[currentTextIndex] || 'currentColor'
  }

  const currentText = text[currentTextIndex] || ''
  const currentColor = getColorForPosition(displayedText.length, currentText)

  // Split text into colored segments
  const renderColoredText = () => {
    if (!colorRanges || colorRanges.length === 0) {
      return (
        <span style={{ color: currentColor }}>
          {displayedText}
        </span>
      )
    }

    const segments = []
    let lastIndex = 0

    // Sort ranges by start position
    const sortedRanges = [...colorRanges].sort((a, b) => a.start - b.start)

    for (const range of sortedRanges) {
      if (range.start > lastIndex && range.start <= displayedText.length) {
        // Add text before this range
        if (range.start > lastIndex) {
          const defaultColor = textColors?.[currentTextIndex] || 'currentColor'
          segments.push({
            text: displayedText.slice(lastIndex, Math.min(range.start, displayedText.length)),
            color: defaultColor,
          })
        }
      }
      if (range.start < displayedText.length) {
        const endPos = Math.min(range.end, displayedText.length)
        if (endPos > range.start) {
          segments.push({
            text: displayedText.slice(Math.max(range.start, lastIndex), endPos),
            color: range.color,
          })
        }
        lastIndex = Math.max(lastIndex, endPos)
      }
    }

    // Add remaining text
    if (lastIndex < displayedText.length) {
      const defaultColor = textColors?.[currentTextIndex] || 'currentColor'
      segments.push({
        text: displayedText.slice(lastIndex),
        color: defaultColor,
      })
    }

    return (
      <>
        {segments.map((segment, idx) => (
          <span key={idx} style={{ color: segment.color }}>
            {segment.text}
          </span>
        ))}
      </>
    )
  }

  return (
    <span className={className}>
      {renderColoredText()}
      {showCursor && (
        <span
          className="inline-block ml-1"
          style={{
            opacity: showCursorState ? 1 : 0.3,
            color: currentColor,
            transition: 'opacity 0.3s ease',
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  )
}
