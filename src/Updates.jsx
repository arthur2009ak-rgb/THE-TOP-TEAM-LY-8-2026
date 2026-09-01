import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import UpdateCard from './UpdateCard'
import { updates } from '../data/updates'

export default function Updates() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.6'],
  })

  return (
    <section ref={containerRef} className="relative mx-auto max-w-2xl px-6 pb-12">
      {/* base spine */}
      <div className="absolute right-4 top-0 bottom-0 w-px bg-silver-500/10 sm:right-[1.375rem]" />
      {/* lit spine, grows with scroll progress */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute right-4 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500/60 sm:right-[1.375rem]"
      />

      {updates.map((u, i) => (
        <UpdateCard key={u.number} index={i} {...u} />
      ))}
    </section>
  )
}
