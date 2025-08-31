import { createContext, useContext, useEffect, useState } from "react";
import type { QuestListType } from "../types/card"
import { supabase } from "../supabase";

interface TaskContextType {
  tasks: QuestListType[];
  setTasks: (tasks: QuestListType[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  fetchTasks: () => Promise<void>;

}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context;
}


const TaskProvider = ({ children }: { children: React.ReactNode }) => {
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

  useEffect(() => {
    fetchTasks()
  }, [])

  const value = {
    tasks,
    setTasks,
    isLoading,
    setIsLoading,
    fetchTasks
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
