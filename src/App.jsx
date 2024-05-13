import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './layouts/Layout';
import BotCollection from "./pages/BotCollection";
import ViewBot from "./components/ViewBot";
import BotArmy from "./pages/BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [viewBot, setViewBot] = useState(null);

  const [army, setArmy] = useState([]);

  function fetchBots() {
    fetch("http://localhost:3001/bots", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bots) => setBots(bots));
  }

  useEffect(() => {
    fetchBots();
  }, []);

  // console.log(viewBot)

  function handleAddViewBot(doc) {
    setViewBot(doc);
    // console.log(doc, 'this is handleAddViewBot')
  }

  function removeViewBot() {
    setViewBot(null);
  }

  function enlistBot(doc) {
    for (let bot of army) {
      if (bot.id === doc.id) return;
    }
    setArmy([doc, ...army]);
    // console.log(army)
  }

  function removeFromArmy(doc) {
    const botArmy = army.filter((bot) => (bot.id === doc.id ? false : true));
    setArmy(botArmy);
    // console.log(doc, 'removed from army')
  }

  return (
    <div>
      <BotArmy army={army} removeFromArmy={removeFromArmy} />
      <ViewBot
        doc={viewBot}
        setDoc={setViewBot}
        removeViewBot={removeViewBot}
        enlistBot={enlistBot}
      />
      <BotCollection bots={bots} handleAddViewBot={handleAddViewBot} />
    </div>
    // <Router>
    //     <Routes>
    //         <Route path='/' element={<Layout />} >
    //             <Route element={<ViewBot doc={viewBot} setDoc={setViewBot} />} />
    //             <Route index element={<BotCollection bots={bots} handleAddViewBot={handleAddViewBot}  />} />
    //         </Route>
    //     </Routes>
    // </Router>
  );
}

export default App;
