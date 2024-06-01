import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const store = (set) => ({
    tasks: [],
    addTask: (value) => set((store) => ({ tasks: [...store.tasks, value] }), false, 'addTask'),
    removeTask: (value) => set((store) => ({ tasks: store.tasks.filter((item) => item !== value) }), false, 'removeTask'),
})

export const useTodo = create(devtools(store))
