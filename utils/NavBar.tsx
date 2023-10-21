export default function NavBar({setIndex}){
  const elements = [
    {
      name: 'Home',
      index: 0
    },
    {
      name: 'About',
      index: 1
    },
    {
      name: 'Docs',
      index: 2
    }
  ]
  function passIndex(index:number){
    setIndex(index);
  }
  return (
    <>
      <div
        className=" fixed right-0 w-3/5 list-none flex flex-col
        justify-center items-center
         bg-white shadow-xl
            
      
      "
      >
        {elements.map((e) => (
          <li onClick={()=>passIndex(e.index)}
            className="text-2xl my-5 m-4 text-gray-800 
          "
          >
            {e.name}
          </li>
        ))}
      </div>
    </>
  )
}
