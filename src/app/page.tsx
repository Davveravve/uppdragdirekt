import Link from 'next/link'

export default function Home() {
  // Simulerade kategorier för demonstration
  const categories = [
    { id: 1, name: 'IT-utveckling', icon: '💻' },
    { id: 2, name: 'Design', icon: '🎨' },
    { id: 3, name: 'Marknadsföring', icon: '📢' },
    { id: 4, name: 'Ekonomi', icon: '📊' },
    { id: 5, name: 'Redaktionellt', icon: '✏️' },
    { id: 6, name: 'Översättning', icon: '🌐' },
  ]

  // Simulerade uppdrag för demonstration
  const latestJobs = [
    {
      id: 1,
      title: 'Utveckla en e-handelsplattform',
      company: 'WebShop AB',
      price: '30 000 - 50 000 kr',
      deadline: '2024-04-15',
      category: 'IT-utveckling',
    },
    {
      id: 2,
      title: 'Design av företagslogotyp',
      company: 'Startup Sverige',
      price: '5 000 - 10 000 kr',
      deadline: '2024-04-01',
      category: 'Design',
    },
    {
      id: 3,
      title: 'SEO-optimering av hemsida',
      company: 'DigitalMarketing AB',
      price: '15 000 - 20 000 kr',
      deadline: '2024-04-10',
      category: 'Marknadsföring',
    },
  ]

  return (
    <>

      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Hitta uppdrag eller frilansare</h2>
            <p className="text-xl mb-8">Sveriges snabbaste väg att hitta kvalificerade frilansare eller spännande uppdrag</p>
            
            {/* Search box */}
            <div className="relative max-w-2xl mx-auto mb-10">
              <input 
                type="text" 
                placeholder="Sök efter uppdrag eller frilansare..." 
                className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="absolute right-1 top-1 bg-success-500 hover:bg-success-600 text-white px-6 py-2 rounded-full transition-colors">
                Sök
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/publish" className="btn-success px-6 py-3 rounded-full">Publicera uppdrag</Link>
              <Link href="/register-freelancer" className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-full transition-colors">Bli frilansare</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">Bläddra efter kategori</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/uppdrag?category=${category.name}`}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest jobs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">Senaste uppdragen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestJobs.map((job) => (
              <div key={job.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="bg-primary-100 text-primary-700 text-sm px-2 py-1 rounded">
                    {job.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">Företag: {job.company}</p>
                <p className="text-gray-600 mb-2">Budget: {job.price}</p>
                <p className="text-gray-600 mb-4">Deadline: {job.deadline}</p>
                <Link href={`/uppdrag/${job.id}`} className="btn-primary w-full text-center">
                  Visa uppdrag
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/uppdrag" className="btn-outline">
              Visa alla uppdrag
            </Link>
          </div>
        </div>
      </section>

      {/* Featured freelancers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">Topp Frilansare</h2>
          {/* Freelancer content will go here */}
          <div className="text-center">
            <Link href="/frilansare" className="btn-outline">
              Utforska fler frilansare
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}