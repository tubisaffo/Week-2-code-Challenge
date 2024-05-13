import PropTypes from "prop-types";

function BotCard({ bot, handleAddViewBot = () => {}, children }) {
  return (
    <div
      style={{ width: "250px" }}
      className="flex flex-col m-2 mt-5 border-2 border-solid border-black bg-orange-100 p-0 clear-right items-center overflow-hidden text-center  pb-2"
      onClick={() => handleAddViewBot(bot)}
    >
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.name}</p>
      <p>{bot.bot_class}</p>
      <p className="text-gray-400 pl-1 pr-1 w-[100%] overflow-clip">
        {bot.catchphrase}
      </p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {children}
    </div>
  );
}

export default BotCard;

BotCard.propTypes = {
  bot: PropTypes.object.isRequired,
  handleAddViewBot: PropTypes.func,
  children: PropTypes.node,
};
