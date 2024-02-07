/* eslint-disable react/prop-types */ 

function Button({children}) {
  return (
    <button className="bg-stone-600 py-2 px-4 
        text-stone-200 rounded-full
        hover:bg-stone-500 
        hover:text-stone-100"
      >
      {children}
    </button>
  );
}

export default Button;