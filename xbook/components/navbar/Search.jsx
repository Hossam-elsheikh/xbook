import React from 'react'
import { Search as SearchIcon} from 'lucide-react';

const Search = ({placeholder}) => {
  return (
    <div className='w-[50%] flex items-center gap-3 border px-3 rounded-md py-2'>
      <SearchIcon size={20} />
      |
        <input type="text" className=' w-full  text-sm rounded-sm outline-none' name='search' placeholder={placeholder} />
    </div>
  )
}

export default Search