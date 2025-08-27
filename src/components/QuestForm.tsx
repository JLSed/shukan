import { useState } from "react"
import type { QuestListType } from "../types/card"
import { supabase } from "../supabase"


//TODO: notification sa submit status
//TODO: Design


const defaultNewTask: QuestListType = {
  title: "",
  description: "",
  checklist: [],
}
const QuestForm = () => {
  const [newTask, setNewTask] = useState<QuestListType>(defaultNewTask)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await supabase.from("tasks").insert(newTask).single()
    if (error) {
      alert(error.message)
      return
    }
    setNewTask(defaultNewTask)
  }
  return (
    <form onSubmit={handleSubmit} className="border-style-1 flex flex-col items-center gap-md p-md">
      <h1 className="header">Add Entry</h1>
      <input name="title" type="text" placeholder="Title" onChange={handleChange} />
      <textarea name="description" className="w-full max-h-64" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default QuestForm
