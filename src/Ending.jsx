import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function Ending() {
  const [ref, inView] = useReveal(0.5)

  return (
    <section className="relative overflow-hidden px-6 py-28 text-center sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg leading-loose text-silver-400 sm:text-xl"
        >
          ولعل ما يميز هذا الشهر أن بعض ما بدأ فيه لم يُكشف عنه بعد...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-3xl font-extrabold leading-snug text-gold-foil sm:text-4xl md:text-5xl"
        >
          أغسطس انتهى، لكن ما بدأ فيه لم ينتهِ.
        </motion.p>
      </div>
    </section>
  )
}
