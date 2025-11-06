import { Metadata } from 'next'

interface Author {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    city: string
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
  }
}

async function getAuthorData(): Promise<Author> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if (!res.ok) {
    throw new Error('Failed to fetch author data')
  }
  return res.json()
}

export const metadata: Metadata = {
  title: 'About - Next.js Demo',
  description: 'About page with author information',
}

export default async function AboutPage() {
  const author = await getAuthorData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About the Author</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {author.name.charAt(0)}
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">{author.name}</h2>
            <p className="text-gray-600">@{author.username}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h3>
            <div className="space-y-2">
              <p><strong>Email:</strong> {author.email}</p>
              <p><strong>Phone:</strong> {author.phone}</p>
              <p><strong>Website:</strong> {author.website}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Location</h3>
            <div className="space-y-2">
              <p><strong>Street:</strong> {author.address.street}</p>
              <p><strong>City:</strong> {author.address.city}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Company</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p><strong>{author.company.name}</strong></p>
            <p className="text-gray-600 italic">"{author.company.catchPhrase}"</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <p className="text-sm text-blue-800">
            <strong>Rendering Method:</strong> Server-Side Rendering (SSR) - Data fetched at request time
          </p>
        </div>
      </div>
    </div>
  )
}