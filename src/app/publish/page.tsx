'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PublishJobPage() {
  const [step, setStep] = useState(1)
  const [previewMode, setPreviewMode] = useState(false)
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    priceMin: '',
    priceMax: '',
    deadline: '',
    location: 'remote',
    skills: [''] as string[],
    attachments: [] as File[]
  })
  
  const categories = [
    { id: 'it', name: 'IT-utveckling' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marknadsföring' },
    { id: 'content', name: 'Redaktionellt' },
    { id: 'finance', name: 'Ekonomi' },
    { id: 'translation', name: 'Översättning' },
    { id: 'other', name: 'Övrigt' },
  ]
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills]
    updatedSkills[index] = value
    setFormData(prev => ({ ...prev, skills: updatedSkills }))
  }
  
  const addSkill = () => {
    setFormData(prev => ({ ...prev, skills: [...prev.skills, ''] }))
  }
  
  const removeSkill = (index: number) => {
    const updatedSkills = [...formData.skills]
    updatedSkills.splice(index, 1)
    setFormData(prev => ({ ...prev, skills: updatedSkills }))
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setFormData(prev => ({ ...prev, attachments: filesArray }))
    }
  }
  
  const nextStep = () => {
    setStep(prev => prev + 1)
  }
  
  const prevStep = () => {
    setStep(prev => prev - 1)
  }
  
  const togglePreview = () => {
    setPreviewMode(prev => !prev)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // När du har konfigurerat en backend-tjänst, anropa den här
    console.log('Publicerar uppdrag:', formData)
    
    // Simulera API-anrop
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Omdirigera till uppdraget
    router.push('/uppdrag/nytt-uppdrag')
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-poppins font-bold mb-4">Publicera uppdrag</h1>
            <p className="text-gray-600">Beskriv ditt uppdrag och hitta rätt frilansare</p>
          </div>
          
          {/* Progress steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <div className={`flex-1 text-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-100 text-primary-600' : 'bg-gray-200 text-gray-400'}`}>
                  1
                </div>
                <div className="mt-2 text-sm">Grundinfo</div>
              </div>
              <div className={`flex-1 text-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-100 text-primary-600' : 'bg-gray-200 text-gray-400'}`}>
                  2
                </div>
                <div className="mt-2 text-sm">Detaljer</div>
              </div>
              <div className={`flex-1 text-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-100 text-primary-600' : 'bg-gray-200 text-gray-400'}`}>
                  3
                </div>
                <div className="mt-2 text-sm">Granska</div>
              </div>
            </div>
            <div className="relative mt-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-gray-200"></div>
              </div>
              <div className="relative flex justify-between">
                <div className={`h-0.5 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'} w-1/2`}></div>
                <div className={`h-0.5 ${step >= 3 ? 'bg-primary-500' : 'bg-gray-200'} w-1/2`}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {/* Form Steps */}
            {!previewMode ? (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Titel på uppdraget *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="input"
                        placeholder="T.ex. 'Designa en ny logotyp för mitt företag'"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Kategori *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="" disabled>Välj kategori</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Beskrivning av uppdraget *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className="input"
                        placeholder="Beskriv uppdraget så detaljerat som möjligt..."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Nästa steg
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="priceMin" className="block text-sm font-medium text-gray-700 mb-1">
                          Lägsta budget (SEK) *
                        </label>
                        <input
                          type="number"
                          id="priceMin"
                          name="priceMin"
                          required
                          value={formData.priceMin}
                          onChange={handleChange}
                          className="input"
                          placeholder="T.ex. 5000"
                        />
                      </div>
                      <div>
                        <label htmlFor="priceMax" className="block text-sm font-medium text-gray-700 mb-1">
                          Högsta budget (SEK) *
                        </label>
                        <input
                          type="number"
                          id="priceMax"
                          name="priceMax"
                          required
                          value={formData.priceMax}
                          onChange={handleChange}
                          className="input"
                          placeholder="T.ex. 10000"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                        Deadline *
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        required
                        value={formData.deadline}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Plats *
                      </label>
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="location"
                            value="remote"
                            checked={formData.location === 'remote'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Remote
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="location"
                            value="onsite"
                            checked={formData.location === 'onsite'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          På plats
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="location"
                            value="hybrid"
                            checked={formData.location === 'hybrid'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Hybrid
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Önskade kompetenser
                      </label>
                      <div className="space-y-2">
                        {formData.skills.map((skill, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="text"
                              value={skill}
                              onChange={(e) => handleSkillChange(index, e.target.value)}
                              className="input mr-2"
                              placeholder="T.ex. 'JavaScript'"
                            />
                            <button
                              type="button"
                              onClick={() => removeSkill(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Ta bort
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addSkill}
                          className="text-primary-600 hover:text-primary-800 font-medium"
                        >
                          + Lägg till kompetens
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bilagor
                      </label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-primary-50 file:text-primary-700
                          hover:file:bg-primary-100"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Du kan ladda upp flera filer (max 5MB vardera)
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        Föregående
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Nästa steg
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Review */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex justify-end mb-4">
                      <button
                        type="button"
                        onClick={togglePreview}
                        className="text-primary-600 hover:text-primary-800 font-medium"
                      >
                        Förhandsgranska
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Sammanfattning av uppdraget</h3>
                        <p className="text-sm text-gray-500">Kontrollera att all information är korrekt innan du publicerar.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Titel</h4>
                          <p>{formData.title || 'Ej angiven'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Kategori</h4>
                          <p>{categories.find(c => c.id === formData.category)?.name || 'Ej vald'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Beskrivning</h4>
                        <p className="whitespace-pre-line">{formData.description || 'Ej angiven'}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Budget</h4>
                          <p>{formData.priceMin && formData.priceMax ? `${formData.priceMin} - ${formData.priceMax} kr` : 'Ej angiven'}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Deadline</h4>
                          <p>{formData.deadline ? new Date(formData.deadline).toLocaleDateString('sv-SE') : 'Ej angiven'}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Plats</h4>
                          <p>
                            {formData.location === 'remote' && 'Remote'}
                            {formData.location === 'onsite' && 'På plats'}
                            {formData.location === 'hybrid' && 'Hybrid'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Kompetenser</h4>
                          {formData.skills.filter(s => s).length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {formData.skills.filter(s => s).map((skill, index) => (
                                <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p>Inga kompetenser angivna</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Bilagor</h4>
                        {formData.attachments.length > 0 ? (
                          <ul className="list-disc list-inside">
                            {formData.attachments.map((file, index) => (
                              <li key={index} className="text-sm">{file.name}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>Inga bilagor uppladdade</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        Föregående
                      </button>
                      <button
                        type="submit"
                        className="btn-success"
                      >
                        Publicera uppdrag
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Preview Mode */
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">{formData.title}</h2>
                  <button
                    type="button"
                    onClick={togglePreview}
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Tillbaka till redigering
                  </button>
                </div>
                
                <div className="card border border-gray-200">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{formData.title}</h3>
                      <p className="text-gray-600">Publicerat av: Ditt Företag AB</p>
                    </div>
                    <span className="bg-primary-100 text-primary-700 text-sm px-2 py-1 rounded">
                      {categories.find(c => c.id === formData.category)?.name || 'Ej kategoriserad'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Budget: {formData.priceMin && formData.priceMax ? `${formData.priceMin} - ${formData.priceMax} kr` : 'Ej angiven'}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Beskrivning</h4>
                    <p className="text-gray-700 whitespace-pre-line">{formData.description}</p>
                  </div>
                  
                  {formData.skills.filter(s => s).length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Önskade kompetenser</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.filter(s => s).map((skill, index) => (
                          <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {formData.attachments.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Bilagor</h4>
                      <ul className="list-disc list-inside">
                        {formData.attachments.map((file, index) => (
                          <li key={index} className="text-sm">{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="btn-primary">
                      Ansök om uppdraget
                    </button>
                    <button className="btn-outline">
                      Spara
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}