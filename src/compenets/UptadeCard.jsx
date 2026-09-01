import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function UpdateCard({ number, title, body, tag, mysterious, index }) {
  const [ref, inView] = useReveal(0.35)

  return (
    <div ref={ref} className="relative py-8 pr-14 sm:py-10 sm:pr-20">
      {/* node on the spine */}
      <motion.span
        initial={{ scale: 0.4, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={[
          'absolute right-2.5 top-10 h-3 w-3 -translate-y-1/2 rounded-full sm:right-[1.125rem]',
          mysterious ? 'bg-gold-300 shadow-[0_0_16px_rgba(232,196,104,0.7)]' : 'bg-gold-400 shadow-[0_0_10px_rgba(200,155,60,0.5)]',
        ].join(' ')}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className={[
          'rounded-2xl border p-6 sm:p-8',
          mysterious
            ? 'border-gold-400/30 bg-gradient-to-br from-ink-800/80 to-ink-900/40 backdrop-blur-sm'
            : 'border-silver-500/10 bg-ink-800/40',
        ].join(' ')}
      >
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <span
            className={[
              'font-display text-4xl font-black leading-none sm:text-5xl',
              mysterious ? 'text-gold-foil' : 'text-silver-foil',
            ].join(' ')}
          >
            {number}
          </span>
          {tag && (
            <span className="rounded-full border border-silver-500/20 px-3 py-1 text-xs text-silver-400">
              {tag}
            </span>
          )}
        </div>

        <h3 className="mb-3 font-display text-2xl font-bold text-silver-200 sm:text-3xl">
          {title}
        </h3>

        <p className={['text-base leading-8 sm:text-lg', mysterious ? 'text-silver-300' : 'text-silver-400'].join(' ')}>
          {body}
        </p>

        {mysterious && (
          <div className="mt-5 h-px w-full bg-gradient-to-l from-gold-400/50 via-gold-400/10 to-transparent" />
        )}
      </motion.div>
    </div>
  )
}
