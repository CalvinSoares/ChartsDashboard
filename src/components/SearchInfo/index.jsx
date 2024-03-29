import { BiSearch } from 'react-icons/bi'

const Search = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="h-12 w-48 flex items-center bg-[#333333] rounded-3xl px-4 py-2">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent h-8 w-36 outline-none text-lg text-white placeholder:text-gray-300"
        value={value}
        onChange={onChange}
      />
      <BiSearch className="text-white"/>
    </div>
  )
}

export default Search