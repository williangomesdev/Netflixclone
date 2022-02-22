import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      //pegando lista total
      let list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);
  return <div>Olá mundo!!!</div>;
};
