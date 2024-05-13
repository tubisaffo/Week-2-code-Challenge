import PropTypes from "prop-types";
import BotCard from "../components/BotCard";

function ViewBot({
  doc = null,
  setDoc = () => {},
  removeViewBot = () => {},
  enlistBot = () => {},
}) {
  if (doc === null) {
    return null;
  }

  return (
    <div
      className="inline-block items-center overflow-hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
    >
      <BotCard bot={doc} />
      <p className="pb-2">
        <button
          className="border rounded-md border-black hover:border-slate-400 bg-emerald-100 pl-2 pr-2 ..."
          onClick={() => enlistBot(doc)}
        >
          Enlist
        </button>
      </p>
      <p className="pb-2">
        <button
          className="border rounded-md border-black hover:border-slate-400 bg-emerald-100 pl-2 pr-2 ..."
          onClick={removeViewBot}
        >
          Go Back
        </button>
      </p>
    </div>
  );
}

export default ViewBot;

ViewBot.propTypes = {
  doc: PropTypes.object,
  setDoc: PropTypes.func.isRequired,
  removeViewBot: PropTypes.func.isRequired,
  enlistBot: PropTypes.func.isRequired,
};
