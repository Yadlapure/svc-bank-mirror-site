
const Directors = () => {
  const directors = [
    {
      id: 1,
      name: "Sri. K.S. Krishnamurthy",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Smt. Saroja Devi",
      position: "Vice Chairman",
      image: "https://images.unsplash.com/photo-1494790108755-2616c056ef20?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sri. S. Raju",
      position: "Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sri. B. Mahadevan",
      position: "Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Sri. Shivananda Gowda",
      position: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Sri. Manjunath",
      position: "Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Sri. Ganesh",
      position: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Sri. Venkatesh",
      position: "Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Sri. Suresh Kumar",
      position: "Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Smt. Lakshmi",
      position: "Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616c056ef20?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Sri. Rajesh",
      position: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Sri. Prakash",
      position: "Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="directors" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-pink-500 text-white text-center py-4 rounded-lg mb-12">
          <h2 className="text-3xl font-bold">Board of Directors</h2>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {directors.map((director) => (
            <div key={director.id} className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-40 mx-auto rounded-lg overflow-hidden border-4 border-yellow-400 shadow-lg">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-yellow-200 rounded-lg p-3 mx-2">
                <h3 className="font-semibold text-sm text-gray-800 mb-1">{director.name}</h3>
                <p className="text-xs text-gray-600">{director.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Leadership Excellence</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our Board of Directors brings together decades of experience in banking, finance, 
              and cooperative management. Under their guidance, SVC Co-operative Bank has grown 
              to become a trusted financial institution serving the community with dedication and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
