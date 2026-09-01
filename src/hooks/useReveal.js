import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Returns a ref + boolean that flips to true once when the element
 * scrolls into view, and stays true (no re-trigger on scroll up/down).
 */
export function useReveal(amount = 0.4) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount })
  return [ref, inView]
}
