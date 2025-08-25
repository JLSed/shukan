import React, { useEffect, useState } from "react";
import QuestBoard from "../components/QuestList";
import type { QuestListType } from "../types/card";
import { supabase } from "../supabase";

const defaultNewTask: QuestListType = {
  title: "",
  description: "",
  checklist: [],
}

const Homepage = () => {
  const [newTask, setNewTask] = useState<QuestListType>(defaultNewTask)
  const [tasks, setTasks] = useState<QuestListType[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    console.log(newTask)
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await supabase.from("tasks").insert(newTask).single()
    if (error) {
      alert(error.message)
      return
    }
    setNewTask(defaultNewTask)
  }

  const fetchTasks = async () => {

    const { error, data } = await supabase.from("tasks").select("*").order("created_at", { ascending: true })
    if (error) {
      alert(error.message)
      return
    }
    console.log(data)
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  return (
    <div className="flex content-center justify-center p-lg">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input name="title" type="text" placeholder="Title" onChange={handleChange} />
          <input name="description" type="text" placeholder="Description" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <QuestBoard questHeader="Daily Quest" questList={tasks} />
    </div>
  );
};

export default Homepage;
