export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer group transition-shadow duration-300">
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 p-3 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-black">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
