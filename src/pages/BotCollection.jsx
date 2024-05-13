import PropTypes from "prop-types";
import BotCard from "../components/BotCard";

function BotCollection({ bots, handleAddViewBot }) {
  return (
    <div className="flex flex-wrap" style={{ width: "fit-content" }}>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleAddViewBot={handleAddViewBot} />
      ))}
    </div>
  );
}

export default BotCollection;

BotCollection.propTypes = {
  bots: PropTypes.array.isRequired,
  handleAddViewBot: PropTypes.func, // No need for default value here
};
