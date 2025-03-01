import React from 'react'
import { Search as SearchIcon} from 'lucide-react';

const Search = ({placeholder,className}) => {
  return (
    <div className={`w-full md:w-[50%] flex items-center gap-3 border px-3 rounded-md py-2 ${className}`}>
      <SearchIcon size={20} />
      |
        <input type="text" className=' w-full  text-sm rounded-sm outline-none' name='search' placeholder={placeholder} />
    </div>
  )
}

export default Search