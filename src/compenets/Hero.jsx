import { motion } from 'framer-motion'
import logo from '../assets/logo.jpg'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* diagonal foil lines, echoing the logo's corner motif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -right-10 -top-10 h-72 w-72 rotate-45 border-t border-gold-500/40" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rotate-45 border-t border-gold-500/25" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 -rotate-45 border-t border-silver-400/25" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8 h-28 w-28 sm:h-32 sm:w-32"
      >
        <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-2xl" />
        <img
          src={logo}
          alt="شعار فريق القمة"
          className="relative h-full w-full rounded-2xl object-cover shadow-[0_0_40px_rgba(200,155,60,0.25)]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl font-display text-4xl font-extrabold leading-[1.3] text-silver-foil sm:text-5xl md:text-6xl"
      >
        أبرز أعمال ومستجدات
        <br />
        <span className="text-gold-foil">شهر أغسطس</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 font-display text-sm font-semibold tracking-[0.25em] text-silver-500"
      >
        فريق القمة — أغسطس 2026
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-silver-500"
      >
        <span className="text-xs">مرر للأسفل</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-6 w-px bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
