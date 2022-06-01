import { useEffect, useState } from "react";
import { IoInvertMode } from "react-icons/io5";

import {
  SearchResult,
  ThemeChanger,
  ThemeForm,
  ThemeHeader,
  ThemeLogo,
} from "../Global/themeComponents";
import { SubmitBtn } from "../Global/themeBtns";

const conditionStr = (str) => {
  const nStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return nStr.toLowerCase();
};

export default function Header({ mode, setMode, products, setFilter }) {
  const [search, setSearch] = useState("todos");

  useEffect(() => {
    const searched = conditionStr(search);
    if (searched !== "todos") {
      const newList = products.filter(
        (obj) =>
          conditionStr(obj.category).includes(searched) ||
          conditionStr(obj.name).includes(searched)
      );

      setFilter(newList);
    } else setFilter(products);
  }, [search, products, setFilter]);

  return (
    <>
      <ThemeHeader mode={mode}>
        <div className="container small">
          <ThemeLogo mode={mode}>
            Burguer&nbsp;<span>Kenzie</span>
          </ThemeLogo>

          <ThemeForm
            mode={mode}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Pesquisar..."
              onKeyUp={(e) => {
                setSearch(e.target.value);
                e.target.value === "" && setSearch("todos");
                e.target.value === " " && setSearch("todos");
              }}
            />
            <SubmitBtn btnSize="small">Pesquisar</SubmitBtn>
          </ThemeForm>
          <ThemeChanger mode={mode}>
            <IoInvertMode
              onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
              }}
            />
          </ThemeChanger>
        </div>
      </ThemeHeader>
      <SearchResult mode={mode}>
        {search !== "todos" && (
          <div className="container small">
            <h3>
              Resultados para: <span>{search}</span>
            </h3>
          </div>
        )}
      </SearchResult>
    </>
  );
}
