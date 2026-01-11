'use client'

import { useState, useEffect } from 'react'
import { tasksAPI, userAPI } from '@/lib/api'
import TaskList from '@/components/TaskList'
import TaskForm from '@/components/TaskForm'
import TaskFilters from '@/components/TaskFilters'
import ProfileCard from '@/components/ProfileCard'
import StatsCard from '@/components/StatsCard'
import { CheckCircle, Clock, AlertCircle, ListTodo } from 'lucide-react'

export default function DashboardPage() {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: ''
  })

  useEffect(() => {
    loadData()
  }, [filters])

  // for loading tasks and user data
  const loadData = async () => {
    try {
      setLoading(true)
      const [tasksResponse, userResponse] = await Promise.all([
        tasksAPI.getTasks(filters),
        userAPI.getProfile()
      ])
      setTasks(tasksResponse.tasks)
      setUser(userResponse.user)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  // for creating task
  const handleCreateTask = async (taskData) => {
    try {
      await tasksAPI.createTask(taskData)
      setShowTaskForm(false)
      loadData()
    } catch (error) {
      console.error('Error creating task:', error)
      throw error
    }
  }

  // for updating task
  const handleUpdateTask = async (id, taskData) => {
    try {
      await tasksAPI.updateTask(id, taskData)
      setEditingTask(null)
      loadData()
    } catch (error) {
      console.error('Error updating task:', error)
      throw error
    }
  }

  // for deleting task
  const handleDeleteTask = async (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      try {
        await tasksAPI.deleteTask(id)
        loadData()
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    }
  }

  // for editing task
  const handleEditTask = (task) => {
    setEditingTask(task)
    setShowTaskForm(true)
  }

  // for canceling form
  const handleCancelForm = () => {
    setShowTaskForm(false)
    setEditingTask(null)
  }

  // for calculating task stats
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00CED1]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Tasks"
          value={taskStats.total}
          icon={ListTodo}
          color="teal"
        />
        <StatsCard
          title="Completed"
          value={taskStats.completed}
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="In Progress"
          value={taskStats.inProgress}
          icon={Clock}
          color="blue"
        />
        <StatsCard
          title="Pending"
          value={taskStats.pending}
          icon={AlertCircle}
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <ProfileCard user={user} />
        </div>

        {/* Tasks Section */}
        <div className="lg:col-span-2">
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">Tasks</h1>
              <button
                onClick={() => setShowTaskForm(true)}
                className="btn-teal-bg"
              >
                + New Task
              </button>
            </div>

            <TaskFilters filters={filters} setFilters={setFilters} />

            {showTaskForm && (
              <div className="mt-6">
                <TaskForm
                  task={editingTask}
                  onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                  onCancel={handleCancelForm}
                />
              </div>
            )}

            <div className="mt-6">
              <TaskList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
