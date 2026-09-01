import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function Intro() {
  const [ref, inView] = useReveal(0.5)

  return (
    <section className="mx-auto max-w-2xl px-6 py-28 text-center sm:py-36">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl font-light leading-[1.9] text-silver-200 sm:text-2xl"
      >
        شهد شهر أغسطس حراكًا متواصلًا في عدد من مشاريع فريق القمة، بين
        مشاريع بلغت مراحلها النهائية، وأخرى تواصلت أعمال تطويرها، ومشاريع
        جديدة بدأت ملامحها بالظهور.
      </motion.p>
    </section>
  )
}
