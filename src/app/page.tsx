import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-primary-blue text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Placeholder for a large hero banner image/pattern */}
        {/* <Image src="/images/hero-banner.png" alt="Pokémon Battle Scene" layout="fill" objectFit="cover" quality={75} className="opacity-30" /> */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Build Your Ultimate Pokémon Team!</h1>
          <p className="text-xl mb-8">
            The ultimate platform for managing your Pokémon teams and preparing for competitive tournaments.
          </p>
          <button className="bg-primary-yellow hover:bg-yellow-500 text-blue-800 font-bold py-3 px-6 rounded-full text-lg transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <Image src="/images/team-builder-icon.svg" alt="Team Builder Icon" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Team Builder</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Easily create and customize your Pokémon teams with a comprehensive database.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <Image src="/images/tournament-prep-icon.svg" alt="Tournament Prep Icon" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Tournament Prep</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Analyze matchups, practice strategies, and prepare for upcoming tournaments.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <Image src="/images/pokedex-icon.svg" alt="Pokédex Icon" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Pokémon Database</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access detailed information about every Pokémon, including stats, abilities, and moves.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="mb-2">© 2024 Pokémon Team Manager. All rights reserved.</p>
        <div className="flex justify-center flex-wrap space-x-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
