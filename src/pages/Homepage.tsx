import { useEffect, useState } from "react";
import QuestBoard from "../components/QuestList";
import type { QuestListType } from "../types/card";
import { supabase } from "../supabase";
import QuestForm from "../components/QuestForm";


const Homepage = () => {
  const [tasks, setTasks] = useState<QuestListType[]>([])


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
    <div className="flex justify-center gap-4 p-lg">
      <QuestForm />
      <QuestBoard questHeader="Daily Quest" questList={tasks} />
    </div>
  );
};

export default Homepage;
