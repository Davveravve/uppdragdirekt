import Link from 'next/link'
import Image from 'next/image'

export default function FreelancersPage() {
  // Simulerade kategorier för filtrering
  const categories = [
    { id: 1, name: 'Alla kompetenser' },
    { id: 2, name: 'Webbutveckling' },
    { id: 3, name: 'Grafisk design' },
    { id: 4, name: 'Digital marknadsföring' },
    { id: 5, name: 'Redaktionellt' },
    { id: 6, name: 'Ekonomi & Finans' },
    { id: 7, name: 'Projektledning' },
  ]
  
  // Simulerade frilansare för demonstration
  const freelancers = [
    {
      id: 1,
      name: 'Anna Andersson',
      title: 'Webbutvecklare',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      rating: 4.9,
      completedJobs: 42,
      location: 'Stockholm',
      hourlyRate: '650 kr/h',
      bio: 'Fullstack-utvecklare med över 8 års erfarenhet av att bygga webbapplikationer. Specialiserad på React och Node.js.'
    },
    {
      id: 2,
      name: 'Erik Eriksson',
      title: 'Grafisk designer',
      skills: ['Adobe Photoshop', 'Illustrator', 'Figma', 'UX/UI design'],
      rating: 4.7,
      completedJobs: 28,
      location: 'Remote',
      hourlyRate: '580 kr/h',
      bio: 'Kreativ designer med fokus på användarvänlig design och varumärkesidentitet. Har arbetat med både startups och etablerade företag.'
    },
    {
      id: 3,
      name: 'Maria Svensson',
      title: 'Digital marknadsförare',
      skills: ['SEO', 'SEM', 'Google Analytics', 'Content Marketing'],
      rating: 4.8,
      completedJobs: 35,
      location: 'Göteborg',
      hourlyRate: '620 kr/h',
      bio: 'Strategisk marknadsförare med erfarenhet av att öka organisk trafik och konverteringar. Expertis inom SEO och innehållsmarknadsföring.'
    },
    {
      id: 4,
      name: 'Johan Lindgren',
      title: 'Webbutvecklare',
      skills: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      rating: 4.6,
      completedJobs: 19,
      location: 'Remote',
      hourlyRate: '595 kr/h',
      bio: 'Backend-fokuserad utvecklare med expertis inom PHP och Laravel. Skapar robusta och skalbara applikationer.'
    },
    {
      id: 5,
      name: 'Sofia Berg',
      title: 'Content Creator',
      skills: ['Copywriting', 'Blogging', 'SEO Writing', 'Content Strategy'],
      rating: 4.9,
      completedJobs: 51,
      location: 'Malmö',
      hourlyRate: '540 kr/h',
      bio: 'Professionell copywriter och innehållsskapare med bakgrund inom journalistik. Skapar engagerande och SEO-optimerat innehåll.'
    },
  ]

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-500 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center">Frilansare</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">Hitta kvalificerade frilansare för ditt nästa projekt</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <div className="card sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filtrera</h2>
              
              {/* Skills Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Kompetenser</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`skill-${category.id}`} 
                        className="mr-2"
                        defaultChecked={category.id === 1}
                      />
                      <label htmlFor={`skill-${category.id}`}>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hourly Rate Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Timpris</h3>
                <div className="space-y-2">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="min-rate" className="text-sm">Minst (kr/h)</label>
                    <input 
                      type="number" 
                      id="min-rate" 
                      placeholder="0" 
                      className="input"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="max-rate" className="text-sm">Max (kr/h)</label>
                    <input 
                      type="number" 
                      id="max-rate" 
                      placeholder="1000" 
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
          
          {/* Freelancer Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{freelancers.length} frilansare</p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2">Sortera efter:</label>
                <select id="sort" className="input max-w-xs">
                  <option value="rating">Högsta betyg</option>
                  <option value="jobs">Flest uppdrag</option>
                  <option value="rate-low">Lägsta timpris</option>
                  <option value="rate-high">Högsta timpris</option>
                </select>
              </div>
            </div>
            
            {/* Freelancer List */}
            <div className="space-y-6">
              {freelancers.map((freelancer) => (
                <div key={freelancer.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for profile image */}
                      <div className="text-gray-400 text-2xl">
                        {freelancer.name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h2 className="text-xl font-semibold">{freelancer.name}</h2>
                          <p className="text-primary-600">{freelancer.title}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="font-medium">{freelancer.rating}</span>
                          <span className="text-gray-500 ml-1">({freelancer.completedJobs} uppdrag)</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {freelancer.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {freelancer.hourlyRate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{freelancer.bio}</p>
                      
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Kompetenser:</h3>
                        <div className="flex flex-wrap gap-2">
                          {freelancer.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Link href={`/frilansare/${freelancer.id}`} className="btn-primary">
                          Visa profil
                        </Link>
                        <button className="btn-outline">
                          Kontakta
                        </button>
                      </div>
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