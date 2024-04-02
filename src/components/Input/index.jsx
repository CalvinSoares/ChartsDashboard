
const Input = ({ title, placeholder, name, id, value, onChange, type, autoComplete }) => {
  return (
    <div>
    <input 
        type={type}
        name={name}
        id={id} 
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
        autoComplete={autoComplete}
    />
    </div>
  )
}

export default Input
