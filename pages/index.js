import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#121212] dark:to-[#1a1a1a] text-gray-900 dark:text-white font-sans">
      <section className="flex flex-col justify-center items-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
        >
          FlirtGene 💘
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl max-w-2xl text-neutral-500 dark:text-neutral-300"
        >
          The world’s first neurochemistry-inspired dating experience. Built on emotional design, elegant UI, and smart matching.
        </motion.p>
        <motion.a
          href="https://github.com/DiabolicDiv/flirtgene-pitch"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg text-md font-medium transition-colors shadow-md hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          View the Code
        </motion.a>
      </section>

      <section className="py-32 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16">
            What We Heard — How We Evolved
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-medium mb-2">Feedback:</h3>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
                <li>The compatibility blueprint appears unchanged regardless of inputs</li>
                <li>The logo doesn’t reflect the dating app vibe</li>
                <li>Hero line lacked clarity</li>
                <li>UI lacked color balance</li>
                <li>Felt like a personality quiz, not bio-based</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Our Response:</h3>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
                <li>Added neuro-archetypes for more dynamic match results</li>
                <li>Updated the brand visuals and logo</li>
                <li>Clarified our neurochemistry positioning in the hero text</li>
                <li>Subtle color gradients mapped to emotion states</li>
                <li>Reframed Coach AI to feel more emotionally present</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Why FlirtGene Works</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            FlirtGene isn’t built on swipes. It’s built on a blend of neuroscience, psychology, emotional UX, and elegant interaction design. The app learns how you love and how you bond — and then helps you meet someone whose chemistry matches yours.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/80 dark:bg-neutral-900 rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl mb-2">Emotion x Neurochemistry</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">From dopamine to oxytocin, we mirror biological traits that affect attraction.</p>
            </div>
            <div className="bg-white/80 dark:bg-neutral-900 rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl mb-2">Dynamic Archetype Results</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">No generic results. We surface Explorer–Connector vs. Director–Stabilizer patterns.</p>
            </div>
            <div className="bg-white/80 dark:bg-neutral-900 rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl mb-2">Silent Luxury UX</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Premium fonts, ambient spacing, and minimalist emotional UI make it feel like falling in love with an Apple product.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} FlirtGene — Emotional Tech for Human Connection
      </footer>
    </main>
  );
}
