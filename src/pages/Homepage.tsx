import QuestList from "../components/QuestList";

const Homepage = () => {
  return (
    <div className="flex content-center justify-center p-lg">
      <QuestList questHeader="Daily Quest" />
    </div>
  );
};

export default Homepage;
