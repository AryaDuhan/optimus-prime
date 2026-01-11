'use client'

import { useState, useEffect } from 'react'

export default function TaskForm({ task, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium'
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        status: task.status || 'pending',
        priority: task.priority || 'medium'
      })
    }
  }, [task])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  // for validation
  const validate = () => {
    const newErrors = {}
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      if (task) {
        await onSubmit(task._id, formData)
      } else {
        await onSubmit(formData)
      }
    } catch (error) {
      setErrors({ submit: error.response?.data?.message || 'Operation failed' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#00CED1]/20 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        {task ? 'Edit Task' : 'Create New Task'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.submit && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded text-sm">
            {errors.submit}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-[#00CED1] mb-1">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter task title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-400">{errors.title}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#00CED1] mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
            placeholder="Enter task description"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#00CED1] mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
            >
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
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 btn-teal-bg disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : task ? 'Update Task' : 'Create Task'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 btn-teal-border"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
