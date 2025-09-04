import { useState } from "react"
import type { QuestListType } from "../types/card"
import { useTaskContext } from "../providers/TaskProvider"
import { BiCoin } from "react-icons/bi"


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
    <form onSubmit={handleSubmit} className="border-style-1 flex flex-col items-center gap-md p-md ">
      <h1 className="header">Add Entry</h1>
      <input className="w-full" required name="title" type="text" placeholder="Title" onChange={handleChange} />
      <div className="border-primary/10 border-2 rounded-md w-full self-start p-md">
        <div className="flex items-center gap-md">
          <BiCoin className=" text-primary text-2xl " />
          <h1 className=" subheader text-2xl inline-flex gap-md ">Pass coin reward</h1>
        </div>
        <p className="text-primary/40">Pick the amount of reward you gain when task is completed.</p>
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
              <div className="flex items-center bg-primary/10 subheader border-2 border-transparent select-none text-3xl p-md rounded-md peer-checked:bg-primary peer-checked:text-light transition-all ease-out">
                <p> {reward} </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <textarea name="description" className="w-full max-h-64" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddEntryForm
