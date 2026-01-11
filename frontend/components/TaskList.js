'use client'

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No tasks found</p>
      </div>
    )
  }

  // for status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    }
  }

  // for priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task._id} className="bg-[#1A1A1A] border border-[#00CED1]/20 rounded-lg p-4 hover:border-[#00CED1] transition-colors">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{task.title}</h3>
              {task.description && (
                <p className="text-gray-400 mt-1">{task.description}</p>
              )}
              <div className="flex gap-2 mt-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                  {task.priority} priority
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(task)}
                className="text-[#00CED1] hover:text-[#40E0D0] text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task._id)}
                className="text-red-400 hover:text-red-300 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
