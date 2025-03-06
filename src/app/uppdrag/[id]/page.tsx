// src/app/uppdrag/[id]/page.tsx
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface JobProps {
  params: {
    id: string
  }
}

export default function JobDetailsPage({ params }: JobProps) {
  const { id } = params
  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState<any>(null)
  const [applyFormVisible, setApplyFormVisible] = useState(false)
  const [application, setApplication] = useState({
    coverLetter: '',
    price: '',
    deliveryDate: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  useEffect(() => {
    // Simulera data hämtning för ett uppdrag
    const fetchJob = async () => {
      setLoading(true)
      
      try {
        // Simulera API-anrop
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Mockup data för demo
        const mockJob = {
          id: parseInt(id),
          title: 'Utveckla en e-handelsplattform',
          company: 'WebShop AB',
          description: `Vi söker en erfaren webbutvecklare som kan hjälpa oss att bygga en e-handelsplattform från grunden med hjälp av moderna tekniker som React, Node.js och MongoDB.

Det här projektet handlar om att skapa en modern och användarvänlig e-handelsplattform för vårt växande företag. Vi säljer högkvalitativa heminredningsprodukter och behöver en plattform som speglar vår varumärkesidentitet samtidigt som den är skalbar för framtida tillväxt.

Vad vi förväntar oss:
- Fullständig e-handelslösning med produktkataloger, kundvagn, betalnings- och fraktintegrationer
- Responsiv design som fungerar väl på alla enheter
- Admin-gränssnitt för produkthantering och orderhantering
- SEO-optimerad struktur
- Prestanda och snabbhet i fokus

Din bakgrund:
- Minst 3 års erfarenhet av webbutveckling
- Erfarenhet av att bygga e-handelsplattformar
- Kunskaper i React, Node.js och MongoDB
- Förståelse för UX/UI-principer

Vi erbjuder ett spännande projekt med långsiktigt samarbete för rätt kandidat.`,
          price: '30 000 - 50 000 kr',
          deadline: '2024-04-15',
          postedDate: '2024-03-01',
          category: 'IT-utveckling',
          location: 'Remote',
          applications: 5,
          skills: ['React', 'Node.js', 'MongoDB', 'E-handel'],
          companyDescription: 'WebShop AB är ett växande e-handelsföretag inom heminredning. Vi startade 2020 och har sedan dess sett en stadig tillväxt på den nordiska marknaden.'
        }
        
        setJob(mockJob)
      } catch (error) {
        console.error('Failed to fetch job:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchJob()
  }, [id])
  
  const handleApplyClick = () => {
    setApplyFormVisible(true)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setApplication(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulera API-anrop för att skicka ansökan
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Ansökan skickad:', { jobId: id, ...application })
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Fel vid skickande av ansökan:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!job) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h1 className="text-2xl font-semibold mb-4">Uppdrag hittades inte</h1>
              <p className="mb-6">Det begärda uppdraget kunde inte hittas. Det kan ha tagits bort eller så har du fel länk.</p>
              <Link href="/uppdrag" className="btn-primary">
                Tillbaka till uppdrag
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-semibold">{job.title}</h1>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="bg-primary-100 text-primary-700 text-sm px-2 py-1 rounded">
                {job.category}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 // fortsättning av src/app/uppdrag/[id]/page.tsx
2s1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Budget: {job.price}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Deadline: {job.deadline}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Publicerad: {job.postedDate}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {job.location}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                {job.applications} ansökningar
              </span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Beskrivning</h2>
              <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>
            
            {job.skills && job.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Önskade kompetenser</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill: string, index: number) => (
                    <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Om företaget</h2>
              <p className="text-gray-700">{job.companyDescription}</p>
            </div>
            
            {!submitSuccess && !applyFormVisible && (
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={handleApplyClick}
                  className="btn-primary"
                >
                  Ansök om uppdraget
                </button>
                <button className="btn-outline">
                  Spara
                </button>
              </div>
            )}
          </div>
          
          {applyFormVisible && !submitSuccess && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Ansök om uppdraget</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Presentationsbrev *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    required
                    value={application.coverLetter}
                    onChange={handleChange}
                    className="input"
                    placeholder="Beskriv varför du passar för uppdraget, din erfarenhet och hur du planerar att genomföra det..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Ditt prisförslag (SEK) *
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    required
                    value={application.price}
                    onChange={handleChange}
                    className="input"
                    placeholder="T.ex. 35 000 kr"
                  />
                </div>
                
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Uppskattad leveransdatum *
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    required
                    value={application.deliveryDate}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={() => setApplyFormVisible(false)}
                    className="btn-outline"
                  >
                    Avbryt
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? 'Skickar ansökan...' : 'Skicka ansökan'}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {submitSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-2">Ansökan skickad!</h2>
              <p className="mb-4">Tack för din ansökan! Uppdragsgivaren kommer att granska din ansökan och återkomma till dig.</p>
              <div className="flex">
                <Link href="/dashboard" className="btn-primary">
                  Gå till dashboard
                </Link>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Link href="/uppdrag" className="text-primary-600 hover:text-primary-800 font-medium">
              ← Tillbaka till alla uppdrag
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}