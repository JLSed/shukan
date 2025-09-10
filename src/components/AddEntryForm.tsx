import { useState } from "react"
import type { QuestListType } from "../types/card"
import { useTaskContext } from "../providers/TaskProvider"


//TODO: notification sa submit status
//TODO: Design


const defaultNewTask: QuestListType = {
  title: "",
  rewardAmount: 0,
  description: "",
  checklist: [],
}
const rewards = [2, 4, 8]

const AddEntryForm = () => {
  const { addNewTask } = useTaskContext();
  const [newTask, setNewTask] = useState<QuestListType>(defaultNewTask)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewTask(newTask)
    setNewTask(defaultNewTask)
  }
  return (
    <form onSubmit={handleSubmit} className="w-full h-full grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] items-center gap-md p-md ">
      <div className="self-start flex flex-col gap-md">
        <input className="w-full p-2" required name="title" type="text" placeholder="Title" onChange={handleChange} />
        <textarea name="description" className="w-full max-h-64" placeholder="Description" onChange={handleChange}></textarea>
      </div>
      <div className="border-primary/10 border-2 rounded-md w-full self-start p-md">
        <div className="flex gap-md">
          {rewards.map((reward) => (
            <label className=" cursor-pointer">
              <input
                type="radio"
                name="rewardAmount"
                value={reward}
                className="hidden peer"
                onChange={handleChange}
                required
              />
              <div className="flex items-center bg-primary/10 subheader border-2 border-transparent select-none text-xl p-sm px-md rounded-md peer-checked:bg-primary peer-checked:text-light transition-all ease-out">
                <p> {reward} </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div>
      </div>
      <button className="w-full" type="submit">Add</button>
    </form>
  )
}

export default AddEntryForm
