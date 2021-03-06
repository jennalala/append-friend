import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";
import axios from "axios";

const LinkedDevelopers = (authUser) => {

  const [developers, setDevelopers] = useState([]);
  const [filterDevs, setFilterDevs] = useState([]);

  const getUserInfo = () => {
      const queryOne = axios.get("api/developer/" + authUser.authUser);
      const queryTwo = axios.get("api/developer/");
      axios.all([queryOne, queryTwo]).then(
        axios.spread((...responses) => {
          const loggedUser = responses[0].data;
          const allUsers = responses[1].data;
          const likedUsers = [];
          for(let i = 0; i < loggedUser.followedUsers.length; i++) {
            allUsers.forEach((all) => {
              if(all._id === loggedUser.followedUsers[i]){
                likedUsers.push(all);
              }
            });
          }
          setDevelopers(likedUsers);
          setFilterDevs(likedUsers);
        })
        ).catch((err) => {
          console.log(err);
      });
  };

  const searchCallback = (searchInput) =>{
    const filterSearch = filterDevs.filter((user) => {
       return user.name.toLowerCase().includes(searchInput);
     });
     setDevelopers(filterSearch);
  }

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar searchCallBack={searchCallback} />
      <div className="container">
        <div className="row">
          {developers.map((developer) => {
            return <DevCards {...developer} key={developer._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LinkedDevelopers;
