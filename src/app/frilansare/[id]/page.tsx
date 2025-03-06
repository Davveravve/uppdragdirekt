// src/app/frilansare/[id]/page.tsx
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FreelancerProps {
  params: {
    id: string
  }
}

export default function FreelancerDetailsPage({ params }: FreelancerProps) {
  const { id } = params
  const [loading, setLoading] = useState(true)
  const [freelancer, setFreelancer] = useState<any>(null)
  const [contactFormVisible, setContactFormVisible] = useState(false)
  const [contactMessage, setContactMessage] = useState({
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  useEffect(() => {
    // Simulera data hämtning för en frilansare
    const fetchFreelancer = async () => {
      setLoading(true)
      
      try {
        // Simulera API-anrop
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Mockup data för demo
        const mockFreelancer = {
          id: parseInt(id),
          name: 'Anna Andersson',
          title: 'Webbutvecklare',
          skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
          rating: 4.9,
          completedJobs: 42,
          location: 'Stockholm',
          hourlyRate: '650 kr/h',
          bio: 'Fullstack-utvecklare med över 8 års erfarenhet av att bygga webbapplikationer. Specialiserad på React och Node.js med fokus på att leverera lösningar av hög kvalitet.',
          longDescription: `Jag är en passionerad webbutvecklare med expertis inom JavaScript-ekosystemet. Min resa inom utveckling började 2015, och sedan dess har jag arbetat med allt från startups till större företag för att leverera robusta, skalbara webbapplikationer.

Min tekniska kompetens omfattar:
- Frontend: React, Redux, TypeScript, Next.js, HTML5, CSS3/SASS
- Backend: Node.js, Express, NestJS, GraphQL
- Databaser: MongoDB, PostgreSQL, Firebase
- Testning: Jest, React Testing Library, Cypress
- DevOps: Docker, CI/CD, AWS

Jag fokuserar på att leverera rena, underhållbara kodbaser som inte bara uppfyller dagens krav utan också är byggda för att växa över tid. Jag är en stark förespråkare för testdriven utveckling och agila arbetssätt.

När jag inte kodar lär jag mig konstant nya tekniker och trender inom webbutveckling. Jag deltar regelbundet i meetups och konferenser för att hålla mig uppdaterad med det senaste inom branschen.`,
          education: [
            {
              institution: 'KTH - Kungliga Tekniska Högskolan',
              degree: 'Civilingenjör, Datateknik',
              years: '2012 - 2017'
            }
          ],
          experience: [
            {
              company: 'TechStart AB',
              role: 'Senior Frontend-utvecklare',
              years: '2020 - Nuvarande',
              description: 'Ledande utvecklare i team som bygger SaaS-produkt för marknadsföringsautomatisering.'
            },
            {
              company: 'WebSolutions',
              role: 'Webbutvecklare',
              years: '2017 - 2020',
              description: 'Fullstack-utvecklare med fokus på skalbara webbapplikationer för e-handel och fintech.'
            }
          ],
          portfolioItems: [
            {
              title: 'E-handelsplattform',
              description: 'Utvecklade en fullständig e-handelslösning med React, Node.js och Stripe.',
              imageUrl: '#'
            },
            {
              title: 'Bokningssystem',
              description: 'Skapade ett skräddarsytt bokningssystem för en tjänsteföretag med fokus på användarupplevelse.',
              imageUrl: '#'
            }
          ],
          testimonials: [
            {
              name: 'Mikael Lindgren',
              company: 'Digital Byrå AB',
              text: 'Anna levererade en fantastisk lösning för vår e-handelsklient. Hennes tekniska kompetens och förmåga att förstå våra behov var enastående.',
              rating: 5
            },
            {
              name: 'Sara Ekström',
              company: 'TechStart',
              text: 'Annas arbete med vår frontend var exakt vad vi behövde. Professionell, effektiv och med en stor känsla för detaljer.',
              rating: 5
            }
          ]
        }
        
        setFreelancer(mockFreelancer)
      } catch (error) {
        console.error('Failed to fetch freelancer:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchFreelancer()
  }, [id])
  
  const handleContactClick = () => {
    setContactFormVisible(true)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactMessage(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulera API-anrop för att skicka meddelande
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Meddelande skickat:', { freelancerId: id, ...contactMessage })
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Fel vid skickande av meddelande:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="animate-pulse">
                <div className="flex gap-6">
                  <div className="rounded-full bg-gray-200 h-32 w-32"></div>
                  <div className="flex-1">
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!freelancer) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h1 className="text-2xl font-semibold mb-4">Frilansare hittades inte</h1>
              <p className="mb-6">Den begärda frilansaren kunde inte hittas. Profilen kan ha tagits bort eller så har du fel länk.</p>
              <Link href="/frilansare" className="btn-primary">
                Tillbaka till frilansare
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="text-gray-400 text-4xl">
                  {freelancer.name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                  <div>
                    <h1 className="text-2xl font-semibold">{freelancer.name}</h1>
                    <p className="text-primary-600">{freelancer.title}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-gray-500 ml-1">({freelancer.completedJobs} uppdrag)</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
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
                  <h2 className="text-sm font-medium text-gray-500 mb-2">Kompetenser:</h2>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill: string, index: number) => (
                      <span 
                        key={index} 
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {!submitSuccess && !contactFormVisible && (
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={handleContactClick}
                      className="btn-primary"
                    >
                      Kontakta frilansare
                    </button>
                    <Link 
                      href={`/uppdrag?invite=${freelancer.id}`}
                      className="btn-outline"
                    >
                      Bjud in till uppdrag
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Sammanfattning</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Slutförda uppdrag</h3>
                  <p className="text-xl font-semibold">{freelancer.completedJobs}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Betyg</h3>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold mr-2">{freelancer.rating}</span>
                    <div className="text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < Math.round(freelancer.rating) ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Medlem sedan</h3>
                  <p className="font-medium">Mars 2022</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Senast aktiv</h3>
                  <p className="font-medium">Idag</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h2 className="text-lg font-semibold mb-4">Om mig</h2>
              <p className="text-gray-700 whitespace-pre-line">{freelancer.longDescription}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Utbildning</h2>
              <div className="space-y-4">
                {freelancer.education.map((edu: any, index: number) => (
                  <div key={index}>
                    <h3 className="font-medium">{edu.institution}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Arbetslivserfarenhet</h2>
              <div className="space-y-4">
                {freelancer.experience.map((exp: any, index: number) => (
                  <div key={index}>
                    <h3 className="font-medium">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.years}</p>
                    <p className="text-gray-700 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {freelancer.portfolioItems.map((item: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Portfolio bild</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Recensioner</h2>
            <div className="space-y-6">
              {freelancer.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                    <div className="text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {contactFormVisible && !submitSuccess && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Kontakta {freelancer.name}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Ämne *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={contactMessage.subject}
                    onChange={handleChange}
                    className="input"
                    placeholder="T.ex. 'Fråga om din erfarenhet av e-handelsprojekt'"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={contactMessage.message}
                    onChange={handleChange}
                    className="input"
                    placeholder="Skriv ditt meddelande här..."
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={() => setContactFormVisible(false)}
                    className="btn-outline"
                  >
                    Avbryt
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {submitSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-2">Meddelande skickat!</h2>
              <p className="mb-4">Ditt meddelande har skickats till {freelancer.name}. Du kommer att få ett svar via din inkorg.</p>
              <div className="flex">
                <Link href="/dashboard" className="btn-primary">
                  Gå till dashboard
                </Link>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Link href="/frilansare" className="text-primary-600 hover:text-primary-800 font-medium">
              ← Tillbaka till alla frilansare
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}