import { createContext, useContext, useEffect, useState } from "react";
import type { QuestListType } from "../types/card"
import { supabase } from "../supabase";

interface TaskContextType {
  tasks: QuestListType[];
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  fetchTasks: () => Promise<void>;
  addNewTask: (newTask: QuestListType) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context;
}


export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<QuestListType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchTasks = async () => {
    setIsLoading(true)
    const { error, data } = await supabase.from("tasks").select("*").order("created_at", { ascending: true })
    if (error) {
      alert(error.message)
      setIsLoading(false)
      return
    }
    console.log(data)
    setTasks(data)
    setIsLoading(false)
  }

  const addNewTask = async (newTask: QuestListType) => {
    const { error } = await supabase.from("tasks").insert(newTask).single()
    if (error) {
      alert(error.message)
      return
    }
    setTasks((prev) => ([...prev, newTask]))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const value = {
    tasks,
    isLoading,
    setIsLoading,
    fetchTasks,
    addNewTask
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

