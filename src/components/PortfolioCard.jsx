export default function PortfolioCard({ image, title, category, index = 0 }) {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-white group border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">{category}</p>
        <h3 className="font-bold text-xl text-black">{title}</h3>
      </div>
    </div>
  )
}
