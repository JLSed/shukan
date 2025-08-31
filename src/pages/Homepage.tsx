import QuestBoard from "../components/QuestBoard";
import AddEntryForm from "../components/AddEntryForm";
import StatView from "../components/StatView";
import TaskProvider from "../providers/TaskProvider";


const Homepage = () => {


  return (

    <div className="grid grid-cols-2 grid-rows-[auto_1fr] justify-center gap-4 p-lg">
      <TaskProvider>
        <StatView />
        <AddEntryForm />
        <QuestBoard questHeader="Daily Quest" />
      </TaskProvider>
    </div>
  );
};

export default Homepage;
