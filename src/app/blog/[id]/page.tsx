export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Post {params.id}</h1>
      <p>Blog post details will be displayed here.</p>
    </div>
  )
}