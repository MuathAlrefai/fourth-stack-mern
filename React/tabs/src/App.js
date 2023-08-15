import { useState } from "react";
import Tabs from "./components/Tabs";
import TabsInfo from "./components/TabsInfo";

function App() {

  const dataArr = [
    {name: "Muath", info: "Cool Guy"},
    {name: "Kareem", info: "Bald Guy"},
    {name: "Yazan", info: "Cheeky Guy"}];

    const [tab, setTab] = useState({});

    const chooseTab = tab => {
      setTab(tab);
    }


  return (
    <>
      <div style={{width: "500px", margin: "0 auto", marginTop: "100px"}}>
        <Tabs data={dataArr} choose={chooseTab} />
      </div>
      <div style={{border: '1px solid black', width: "500px", margin: "0 auto"}}>
        <TabsInfo currentTab={tab} />
      </div>
    </>
  );
}

export default App;
