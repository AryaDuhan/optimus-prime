'use client'

export default function TaskFilters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const clearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      search: ''
    })
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#00CED1]/20 rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#00CED1] mb-1">
            Search
          </label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent"
            placeholder="Search tasks..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#00CED1] mb-1">
            Status
          </label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#00CED1] mb-1">
            Priority
          </label>
          <select
            name="priority"
            value={filters.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent"
          >
            <option value="">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      {(filters.status || filters.priority || filters.search) && (
        <button
          onClick={clearFilters}
          className="mt-3 text-sm text-[#00CED1] hover:text-[#40E0D0]"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
