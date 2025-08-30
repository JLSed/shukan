import { useEffect, useState } from "react";
import QuestBoard from "../components/QuestList";
import type { QuestListType } from "../types/card";
import { supabase } from "../supabase";
import AddEntryForm from "../components/AddEntryForm";
import StatView from "../components/StatView";


const Homepage = () => {
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


  return (
    <div className="grid grid-cols-2 grid-rows-[auto_1fr] justify-center gap-4 p-lg">
      <StatView />
      <AddEntryForm />
      <QuestBoard questHeader="Daily Quest" questList={tasks} isLoading={isLoading} />
    </div>
  );
};

export default Homepage;
