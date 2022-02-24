import React, { useState } from "react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

export default ({ title, items }) => {
  //Listar os cartazes para esquerda ou direita
  const [scrollX, setscrollX] = useState(0);

  //botão esquerdo, a cada clique o movie-list ira se mover pela metade da tela do dispositivo
  const handleLeftArrow = () => {
    //(1400 + 1/2 tela do dispositivo)
    let x = scrollX + Math.round(window.innerWidth / 2);

    //Quando x > 0 = o mesmo vai para no ultimo cartaz
    if (x > 0) {
      x = 0;
    }

    setscrollX(x);
  };

  //botão direito, a cada clique o movie-list ira se mover pela metade da tela do dispositivo
  const handleRightArrow = () => {
    //(-400 - 1/2 tela do dispositivo)
    let x = scrollX - Math.round(window.innerWidth / 2);
    //pegar a quantidade de cartazes na tela
    let listW = items.results.length * 150;
    //diferença do tamanho da tela e quantidade de cartazes da tela do dispositivo
    let difference = window.innerWidth - listW;
    //se difference for maior que o valor de x, o mesmo fica com o valor de difference - o valor da largura das duas arrow (30px cada)
    if (difference > x) {
      x = difference - 80;
    }
    setscrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <ArrowBackIos style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <ArrowForwardIos style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
