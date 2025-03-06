import Link from 'next/link'

export default function JobsPage() {
  // Simulerade kategorier för filtrering
  const categories = [
    { id: 1, name: 'Alla kategorier' },
    { id: 2, name: 'IT-utveckling' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Marknadsföring' },
    { id: 5, name: 'Ekonomi' },
    { id: 6, name: 'Redaktionellt' },
    { id: 7, name: 'Översättning' },
  ]
  
  // Simulerade uppdrag för demonstration
  const jobs = [
    {
      id: 1,
      title: 'Utveckla en e-handelsplattform',
      company: 'WebShop AB',
      price: '30 000 - 50 000 kr',
      deadline: '2024-04-15',
      category: 'IT-utveckling',
      location: 'Remote',
      description: 'Vi söker en erfaren webbutvecklare som kan hjälpa oss att bygga en e-handelsplattform från grunden med hjälp av moderna tekniker som React, Node.js och MongoDB.'
    },
    {
      id: 2,
      title: 'Design av företagslogotyp',
      company: 'Startup Sverige',
      price: '5 000 - 10 000 kr',
      deadline: '2024-04-01',
      category: 'Design',
      location: 'Stockholm',
      description: 'Vårt nystartade företag behöver en modern och elegant logotyp som representerar vårt varumärke. Vi letar efter en kreativ designer med portfolio av tidigare arbeten.'
    },
    {
      id: 3,
      title: 'SEO-optimering av hemsida',
      company: 'DigitalMarketing AB',
      price: '15 000 - 20 000 kr',
      deadline: '2024-04-10',
      category: 'Marknadsföring',
      location: 'Remote',
      description: 'Vi behöver hjälp med att förbättra vår hemsidas synlighet i sökmotorer. Uppdraget omfattar teknisk SEO, innehållsoptimering och länkbyggande.'
    },
    {
      id: 4,
      title: 'Utveckling av mobilapp för iOS och Android',
      company: 'MobileTech AB',
      price: '80 000 - 120 000 kr',
      deadline: '2024-05-20',
      category: 'IT-utveckling',
      location: 'Remote',
      description: 'Vi söker en app-utvecklare med erfarenhet av React Native för att skapa en användarfokuserad mobil app för både iOS och Android.'
    },
    {
      id: 5,
      title: 'Redaktionellt innehåll till företagsblogg',
      company: 'ContentKing',
      price: '2 000 kr / artikel',
      deadline: '2024-03-30',
      category: 'Redaktionellt',
      location: 'Remote',
      description: 'Vi behöver skickliga skribenter som kan producera högkvalitativt innehåll för vår företagsblogg om digital marknadsföring. Uppdraget gäller 10 artiklar per månad.'
    },
  ]

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-500 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center">Uppdrag</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">Hitta uppdrag som matchar dina kompetenser och intresseområden</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <div className="card sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filtrera</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`category-${category.id}`} 
                        name="category" 
                        className="mr-2"
                        defaultChecked={category.id === 1}
                      />
                      <label htmlFor={`category-${category.id}`}>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Budget</h3>
                <div className="space-y-2">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="min-budget" className="text-sm">Minst (kr)</label>
                    <input 
                      type="number" 
                      id="min-budget" 
                      placeholder="0" 
                      className="input"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="max-budget" className="text-sm">Max (kr)</label>
                    <input 
                      type="number" 
                      id="max-budget" 
                      placeholder="100000" 
                      className="input"
                    />
                  </div>
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Plats</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="remote" className="mr-2" />
                    <label htmlFor="remote">Remote</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="stockholm" className="mr-2" />
                    <label htmlFor="stockholm">Stockholm</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="gothenburg" className="mr-2" />
                    <label htmlFor="gothenburg">Göteborg</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="malmo" className="mr-2" />
                    <label htmlFor="malmo">Malmö</label>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full">Tillämpa filter</button>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{jobs.length} uppdrag</p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2">Sortera efter:</label>
                <select id="sort" className="input max-w-xs">
                  <option value="latest">Senaste</option>
                  <option value="price-high">Högsta pris</option>
                  <option value="price-low">Lägsta pris</option>
                  <option value="deadline">Deadline</option>
                </select>
              </div>
            </div>
            
            {/* Job List */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <span className="bg-primary-100 text-primary-700 text-sm px-2 py-1 rounded">
                          {job.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">Företag: {job.company}</p>
                      <p className="text-gray-600 mb-2">Budget: {job.price}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          Deadline: {job.deadline}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {job.location}
                        </span>
                      </div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div className="w-full md:w-auto self-end md:self-center">
                      <Link href={`/uppdrag/${job.id}`} className="btn-primary block text-center">
                        Visa detaljer
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="inline-flex">
                <a href="#" className="px-3 py-2 border rounded-l hover:bg-gray-50">Föregående</a>
                <a href="#" className="px-3 py-2 border-t border-b bg-primary-500 text-white">1</a>
                <a href="#" className="px-3 py-2 border-t border-b hover:bg-gray-50">2</a>
                <a href="#" className="px-3 py-2 border-t border-b hover:bg-gray-50">3</a>
                <a href="#" className="px-3 py-2 border rounded-r hover:bg-gray-50">Nästa</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}