import { useState } from "react";
import {  useDebouncedCallback } from "use-debounce";

const Search = ({setSearchText}) => {
    const [value, setValue] = useState("");
    // Debounce callback
    const debounced = useDebouncedCallback(
      (value) => {
        setSearchText(value);
      },
      1000
    );
    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <input 
                className="block w-full border py-4 px-4 bg-transparent text-white"
                placeholder="Search for crypto"
                onChange={(e) => {
                    setValue(e.target.value);
                    debounced(e.target.value);
                }}
                value={value}
            />
        </div>
    );
};

export default Search;