export default function CalculatorLayout({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h1>

            <p className="text-gray-600 text-lg">
              {description}
            </p>
          </div>

          {children}

        </div>
      </div>
    </main>
  )
}