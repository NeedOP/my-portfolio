import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Mitt Portfolio</h1>
        <p className="mt-2">Byggt med React + TypeScript & hostat på Azure</p>
      </header>

      <main className="p-8 space-y-12">
        {/* Om mig */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">👋 Om mig</h2>
          <p>
            Jag heter Eli, en Systemutvecklare söker LIA praktik. Jag är kunning person.
            Jag är redo att visa mina kunskaper i arbetet.
          </p>
        </section>

        {/* Projekt */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">📂 Mina projekt</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://github.com/NeedOP/HouseFight"
                className="text-blue-600 hover:underline"
              >
                Projekt 1 – Skoluppgift
              </a>
            </li>
            <li>
              <a
                href="https://github.com/NeedOP/tv-tt"
                className="text-blue-600 hover:underline"
              >
                Projekt 2 – Hobbyprojekt
              </a>
            </li>
          </ul>
        </section>
          {/* Skills */}
         <section>
           <h2 className="text-2xl font-semibold mb-4">⚡ Tech stack</h2>
           <ul className="list-disc list-inside space-y-2">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>React</li>
            <li>Azure</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-12">
        <p>© {new Date().getFullYear()} Mitt Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
