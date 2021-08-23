import React, { useState } from "react";
import BigBanner from "../components/BigBanner";
import MedBanner from "../components/MedBanner";
import CardContainer from "../components/CardContainer";
import LoadAnimation from "../components/LoadAnimation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  const [Loading, setLoading] = useState(true);
  return (
    <div>
      {Loading ? <LoadAnimation /> : null}
      
        <div className={Loading ? "hidden invisible" : "visible"}>
          <BigBanner />
          <CardContainer setLoading={setLoading} category="Top sellers" />
          <MedBanner />
          <CardContainer setLoading={setLoading} category="Deals of the day" />
        </div>
      
    </div>
  );
};

export default Home;
