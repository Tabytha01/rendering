export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = [
    { name: 'Tech', count: 12 },
    { name: 'Lifestyle', count: 8 },
    { name: 'Education', count: 15 },
    { name: 'Business', count: 10 },
    { name: 'Health', count: 6 }
  ]

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <button className="text-left py-2 px-3 rounded hover:bg-gray-200 transition-colors flex-1">
                {category.name}
              </button>
              <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                {category.count}
              </span>
            </div>
          ))}
        </nav>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Search</h3>
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </aside>
      
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}