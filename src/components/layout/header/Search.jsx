import { SearchIcon } from "@/components/helpcomponents/buttons/svgnuud/headerSvg/SearchIcon";
import { useEffect, useState } from "react";
import SearchDown from "./SearchDown";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=100")
      .then((response) => response?.json())
      .then((data) => setArticlesForSearch(data));
  };

  if (typeof window !== "undefined") {
    document.body.addEventListener("mouseup", (event) => {
      setIsOpen(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const filterSearch = articlesForSearch.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  return (
    <div>
      <div className="flex justify-center items-center pr-3 bg-[#F4F4F5] relative">
        <input
          onChange={handleInputChange}
          value={searchValue}
          type="search"
          placeholder="Search"
          className="text-black pl-3 bg-[#F4F4F5]"
        />
        <SearchIcon />
        <div className="absolute top-6 ml-3">
          <SearchDown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSearchValue={setSearchValue}
            filterSearch={filterSearch}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
