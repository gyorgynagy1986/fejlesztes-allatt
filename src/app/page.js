export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-red-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        {/* Spanyol zászló és emoji */}
        <div className="mb-8 flex justify-center items-center gap-4">
          <div className="text-5xl">🙏</div>
          <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
            <div className="h-1/3 bg-red-600"></div>
            <div className="h-1/3 bg-yellow-400"></div>
            <div className="h-1/3 bg-red-600"></div>
          </div>
          <div className="text-5xl">🙏</div>
        </div>

        {/* Fejléc */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Fejlesztés alatt
        </h1>
        
        <div className="mb-6">
          <div className="inline-block animate-bounce">
            <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          Jelenleg az oldalunkon dolgozunk, hogy a lehető legjobb élményt nyújthassuk!
        </p>

        {/* Facebook gomb */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 font-medium">
            Addig is látogasson el Facebook oldalunkra:
          </p>
          
          <a
            href="https://www.facebook.com/marsolicante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Látogasson el Facebook oldalunkra
          </a>
        </div>

        {/* Lábjegyzet */}
        <p className="mt-8 text-sm text-gray-500">
          Hamarosan visszatérünk! ¡Hasta pronto!
        </p>
      </div>
    </div>
  );
}