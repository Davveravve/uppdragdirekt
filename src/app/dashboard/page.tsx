// src/app/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClientSupabase } from '../../lib/supabase-client'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [userType, setUserType] = useState('client') // 'client' eller 'freelancer'
  const [activeTab, setActiveTab] = useState('overview')
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const supabase = createClientSupabase()
  
  // Simulerad data för demonstration
  const clientData = {
    publishedJobs: [
      {
        id: 1,
        title: 'Utveckla en e-handelsplattform',
        status: 'active',
        applications: 5,
        deadline: '2024-04-15',
        budget: '30 000 - 50 000 kr',
      },
      {
        id: 2,
        title: 'Design av företagslogotyp',
        status: 'active',
        applications: 8,
        deadline: '2024-04-01',
        budget: '5 000 - 10 000 kr',
      },
      {
        id: 3,
        title: 'Tidigare webbutvecklingsprojekt',
        status: 'completed',
        applications: 12,
        deadline: '2024-02-10',
        budget: '15 000 - 25 000 kr',
      },
    ],
    activeContracts: [
      {
        id: 1,
        jobTitle: 'Tidigare webbutvecklingsprojekt',
        freelancer: 'Johan Lindgren',
        startDate: '2024-02-15',
        endDate: '2024-03-15',
        status: 'completed',
      }
    ],
  }
  
  const freelancerData = {
    applications: [
      {
        id: 1,
        jobTitle: 'Utveckla en mobilapp för iOS och Android',
        company: 'MobileTech AB',
        status: 'pending',
        appliedDate: '2024-03-11',
        budget: '80 000 - 120 000 kr',
      },
      {
        id: 2,
        jobTitle: 'Frontend-utveckling med React',
        company: 'WebDev AB',
        status: 'accepted',
        appliedDate: '2024-03-05',
        budget: '40 000 - 60 000 kr',
      },
      {
        id: 3,
        jobTitle: 'E-handelsprojekt',
        company: 'ShopOnline AB',
        status: 'rejected',
        appliedDate: '2024-02-28',
        budget: '25 000 - 35 000 kr',
      },
    ],
    activeContracts: [
      {
        id: 1,
        jobTitle: 'Frontend-utveckling med React',
        client: 'WebDev AB',
        startDate: '2024-03-10',
        endDate: '2024-04-10',
        status: 'active',
      }
    ],
    savedJobs: [
      {
        id: 1,
        title: 'Utveckla en e-handelsplattform',
        company: 'WebShop AB',
        deadline: '2024-04-15',
        budget: '30 000 - 50 000 kr',
      },
      {
        id: 2,
        title: 'Marknadsföringsplan för startup',
        company: 'Startup Sverige',
        deadline: '2024-04-10',
        budget: '20 000 - 35 000 kr',
      },
    ],
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) throw sessionError
        
        if (session?.user) {
          setUser(session.user)
          
          // Hämta användarens profil för att få användartyp
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('user_type')
            .eq('id', session.user.id)
            .single()
          
          if (profileError) throw profileError
          
          if (profileData) {
            setUserType(profileData.user_type)
          }
        }
      } catch (error) {
        console.error('Fel vid hämtning av användardata:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchUserData()
  }, [supabase])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Utloggningsfel:', error)
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500">Laddar dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Mobile sidebar toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <span className="sr-only">Öppna meny</span>
            </button>
            <h1 className="text-xl font-semibold">{activeTab === 'overview' ? 'Översikt' : 
              activeTab === 'jobs' ? 'Mina uppdrag' : 
              activeTab === 'applications' ? 'Mina ansökningar' : 
              activeTab === 'contracts' ? 'Aktiva uppdrag' :
              activeTab === 'saved' ? 'Sparade uppdrag' : 
              activeTab === 'messages' ? 'Meddelanden' : 'Inställningar'}</h1>
          </div>
          
          {/* Sidebar */}
          <div className={`md:col-span-1 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-100 mx-auto flex items-center justify-center">
                  <span className="text-primary-600 text-xl sm:text-2xl font-semibold">
                    {userType === 'client' ? 'F' : 'A'}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mt-3">
                  {userType === 'client' ? 'Företagsnamn AB' : 'Anna Andersson'}
                </h2>
                <p className="text-gray-500">
                  {userType === 'client' ? 'Uppdragsgivare' : 'Frilansare'}
                </p>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => {
                    setActiveTab('overview')
                    setSidebarOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded ${
                    activeTab === 'overview'
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  Översikt
                </button>
                
                {userType === 'client' && (
                  <>
                    <button
                      onClick={() => {
                        setActiveTab('jobs')
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeTab === 'jobs'
                          ? 'bg-primary-50 text-primary-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      Mina uppdrag
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('contracts')
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeTab === 'contracts'
                          ? 'bg-primary-50 text-primary-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      Aktiva kontrakt
                    </button>
                  </>
                )}
                
                {userType === 'freelancer' && (
                  <>
                    <button
                      onClick={() => {
                        setActiveTab('applications')
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeTab === 'applications'
                          ? 'bg-primary-50 text-primary-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      Mina ansökningar
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('contracts')
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeTab === 'contracts'
                          ? 'bg-primary-50 text-primary-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      Aktiva uppdrag
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('saved')
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeTab === 'saved'
                          ? 'bg-primary-50 text-primary-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      Sparade uppdrag
                    </button>
                  </>
                )}
                
                <button
                  onClick={() => {
                    setActiveTab('messages')
                    setSidebarOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded ${
                    activeTab === 'messages'
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  Meddelanden
                </button>
                
                <button
                  onClick={() => {
                    setActiveTab('settings')
                    setSidebarOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded ${
                    activeTab === 'settings'
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  Inställningar
                </button>
              </nav>
              
              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-3 py-2 text-red-500 hover:text-red-700"
                >
                  Logga ut
                </button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-3">
            {/* Overview tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Välkommen tillbaka!</h2>
                  
                  {userType === 'client' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">{clientData.publishedJobs.filter(job => job.status === 'active').length}</div>
                        <div className="text-gray-600">Aktiva uppdrag</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">
                          {clientData.publishedJobs.reduce((sum, job) => sum + job.applications, 0)}
                        </div>
                        <div className="text-gray-600">Ansökningar totalt</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">{clientData.activeContracts.length}</div>
                        <div className="text-gray-600">Aktiva kontrakt</div>
                      </div>
                    </div>
                  )}
                  
                  {userType === 'freelancer' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">
                          {freelancerData.applications.filter(app => app.status === 'pending').length}
                        </div>
                        <div className="text-gray-600">Pågående ansökningar</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">
                          {freelancerData.activeContracts.filter(contract => contract.status === 'active').length}
                        </div>
                        <div className="text-gray-600">Aktiva uppdrag</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-700">{freelancerData.savedJobs.length}</div>
                        <div className="text-gray-600">Sparade uppdrag</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {userType === 'client' && (
                  <>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Dina senaste uppdrag</h3>
                        <button
                          onClick={() => setActiveTab('jobs')}
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          Visa alla
                        </button>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Titel
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ansökningar
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Deadline
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {clientData.publishedJobs.slice(0, 3).map(job => (
                              <tr key={job.id}>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <Link href={`/dashboard/jobs/${job.id}`} className="text-primary-600 hover:text-primary-900">
                                    {job.title}
                                  </Link>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {job.status === 'active' ? 'Aktiv' : 'Avslutad'}
                                  </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  {job.applications}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  {job.deadline}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
                
                {userType === 'freelancer' && (
                  <>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Dina senaste ansökningar</h3>
                        <button
                          onClick={() => setActiveTab('applications')}
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          Visa alla
                        </button>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Uppdrag
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Företag
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ansökningsdatum
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {freelancerData.applications.slice(0, 3).map(app => (
                              <tr key={app.id}>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <Link href={`/dashboard/applications/${app.id}`} className="text-primary-600 hover:text-primary-900">
                                    {app.jobTitle}
                                  </Link>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  {app.company}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${app.status === 'accepted' 
                                      ? 'bg-green-100 text-green-800' 
                                      : app.status === 'rejected'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {app.status === 'accepted' 
                                      ? 'Accepterad' 
                                      : app.status === 'rejected'
                                        ? 'Avböjd'
                                        : 'Under granskning'
                                    }
                                  </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  {app.appliedDate}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userType === 'client' && (
                      <>
                        <Link href="/publish" className="btn-primary text-center">
                          Publicera nytt uppdrag
                        </Link>
                        <Link href="/frilansare" className="btn-outline text-center">
                          Hitta frilansare
                        </Link>
                      </>
                    )}
                    
                    {userType === 'freelancer' && (
                      <>
                        <Link href="/uppdrag" className="btn-primary text-center">
                          Bläddra bland uppdrag
                        </Link>
                        <Link href="/dashboard/profile" className="btn-outline text-center">
                          Uppdatera profil
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Other tabs would be implemented similarly */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {activeTab === 'jobs' && 'Mina uppdrag'}
                  {activeTab === 'applications' && 'Mina ansökningar'}
                  {activeTab === 'contracts' && (userType === 'client' ? 'Aktiva kontrakt' : 'Aktiva uppdrag')}
                  {activeTab === 'saved' && 'Sparade uppdrag'}
                  {activeTab === 'messages' && 'Meddelanden'}
                  {activeTab === 'settings' && 'Inställningar'}
                </h2>
                
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <h3 className="text-lg font-medium mb-4">Profilinformation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            Förnamn
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="input"
                            defaultValue="Anna"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Efternamn
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="input"
                            defaultValue="Andersson"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-post
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="input"
                            defaultValue={user?.email}
                            disabled
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="input"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn-primary">
                          Spara ändringar
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-b pb-6">
                      <h3 className="text-lg font-medium mb-4">Byt lösenord</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Nuvarande lösenord
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Nytt lösenord
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Bekräfta nytt lösenord
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn-primary">
                          Uppdatera lösenord
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notifikationsinställningar</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="emailNotifications"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                            E-postnotifikationer
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="newApplications"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="newApplications" className="ml-2 block text-sm text-gray-700">
                            Nya ansökningar på uppdrag
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="newMessages"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="newMessages" className="ml-2 block text-sm text-gray-700">
                            Nya meddelanden
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="marketingEmails"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor="marketingEmails" className="ml-2 block text-sm text-gray-700">
                            Marknadsföringsutskick
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn-primary">
                          Spara inställningar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab !== 'settings' && (
                  <p className="text-gray-500">Innehåll för denna flik kommer att implementeras i nästa steg.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}