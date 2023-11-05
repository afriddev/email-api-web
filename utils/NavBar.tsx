export default function NavBar({setIndex,indexOfPage}){
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
        className=" w-[50vw] list-none flex flex-col
        justify-center items-center
         bg-white shadow-xl
      "
      >
        {elements.map((e) => (
          <li onClick={()=>passIndex(e.index)}
            className={indexOfPage == e.index?"text-2xl my-5 m-4 text-blue-500 border-b border-blue-500 ":"text-2xl my-5 m-4 text-gray-800 "}

          >
            {e.name}
          </li>
        ))}
      </div>
    </>
  )
}
