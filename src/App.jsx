import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "../src/styles/App.css";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegar o filme em destaque (Feature)
      let originals = list.filter((i) => i.slug === "originals");

      //pegar filme de maneira aleatoria
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    //Aparecer de foma dinâmica o background do header quando o scroll for ativado
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>
          Desenvolvido por <span>Willian Amaro Gomes</span>
        </p>
        <p>Direitos de imagens a Netflix</p>
        <p>Dados de informações pegos no site themoviedb.org</p>
      </footer>
    </div>
  );
};
