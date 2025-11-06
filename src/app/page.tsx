import RealTimeClock from './components/RealTimeClock'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Next.js App</h1>
      <p className="text-lg text-gray-600 mb-8">
        This application demonstrates different rendering techniques in Next.js.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <RealTimeClock />
        
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rendering Techniques Demo</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span><strong>CSR:</strong> Real-time clock (this component)</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span><strong>SSR:</strong> About page author info</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              <span><strong>SSG:</strong> Blog posts list</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              <span><strong>ISR:</strong> Blog post details</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
