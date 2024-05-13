import PropTypes from "prop-types";
import BotCard from "../components/BotCard";

function BotArmy({ army, removeFromArmy }) {
  return (
    <div
      className="flex flex-wrap bg-lime-500 overflow-hidden"
      style={{ width: "fit-content" }}
    >
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot}>
          <p>
            <button
              className="border rounded-md border-black hover:border-slate-400 bg-red-400 pl-2 pr-2 ..."
              onClick={() => removeFromArmy(bot)}
            >
              Remove
            </button>
          </p>
        </BotCard>
      ))}
    </div>
  );
}

export default BotArmy;

BotArmy.propTypes = {
  army: PropTypes.array.isRequired,
  removeFromArmy: PropTypes.func.isRequired,
};
