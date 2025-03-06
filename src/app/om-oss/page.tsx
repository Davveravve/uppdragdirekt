// src/app/om-oss/page.tsx
export default function AboutPage() {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-8">Om Uppdrag Direkt</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vår historia</h2>
              <p className="mb-4">
                Uppdrag Direkt grundades 2024 med en enkel vision: att skapa en plattform där uppdragsgivare 
                och frilansare enkelt kan hitta varandra utan mellanhänder.
              </p>
              <p className="mb-4">
                Vi såg ett stort behov av att göra marknaden för frilansuppdrag mer transparent och 
                lättillgänglig för alla. Genom vår plattform kan uppdragsgivare hitta kvalificerade 
                frilansare med rätt kompetens för sina projekt, medan frilansare får tillgång till 
                spännande uppdrag som matchar deras färdigheter.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vår mission</h2>
              <p className="mb-4">
                Vår mission är att revolutionera hur frilansuppdrag hittas och genomförs i Sverige. 
                Vi tror på att skapa värde genom att:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Förenkla processen att hitta rätt frilansare för varje uppdrag</li>
                <li>Erbjuda transparens i priser och villkor</li>
                <li>Skapa en trygg plattform där både uppdragsgivare och frilansare kan känna sig säkra</li>
                <li>Stödja den växande gig-ekonomin med moderna verktyg och tjänster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Teamet bakom Uppdrag Direkt</h2>
              <p className="mb-4">
                Vi är ett litet men dedikerat team av entreprenörer, tekniker och designers som brinner för 
                att göra frilansande enklare och mer tillgängligt. Med bakgrund från både tech-branschen 
                och den kreativa sektorn förstår vi behoven hos både uppdragsgivare och frilansare.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center">
                    <span className="text-gray-400 text-3xl">AB</span>
                  </div>
                  <h3 className="font-semibold mt-4">Anders Björklund</h3>
                  <p className="text-gray-600">Grundare & VD</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center">
                    <span className="text-gray-400 text-3xl">ML</span>
                  </div>
                  <h3 className="font-semibold mt-4">Maria Lindgren</h3>
                  <p className="text-gray-600">Produktchef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }