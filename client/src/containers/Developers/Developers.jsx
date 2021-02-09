import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";
import axios from "axios";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    getDevs()
  }, []);

  const getDevs = () => {
    axios
    .get("/api/developer")
    .then((response) => {
      console.log(response.data);
      setDevelopers(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {developers.map((developer) => {
            return <DevCards {...developer} key={developer.username} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Developers;
