export default function Home() {
  return (
    <div className="min-h-screen bg-red-500 text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
        FlirtGene 💘
      </h1>
      <p className="text-lg sm:text-2xl max-w-xl text-center">
        A bold idea at the intersection of love, genetics, and algorithms. This is not your average dating app.
      </p>
      <div className="mt-8">
        <a
          href="https://github.com/DiabolicDiv/flirtgene-pitch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          View the Code
        </a>
      </div>
    </div>
  );
}
