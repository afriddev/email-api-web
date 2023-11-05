export default function LgNavBar({ setIndex, indexOfPage }) {
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
  return (
    <>
      <div className=" mr-24">
        <ul className="flex space-x-6 ">
          {elements.map((e) => (
            <li onClick={() => {
              setIndex(e.index)
            }}
              className={indexOfPage == e.index?"text-2xl my-5 m-4 text-white border px-6 py-2 rounded-xl bg-blue-500"
            :"text-2xl my-5 m-4 text-gray-800 border px-6 py-2 rounded-xl hover:bg-gray-200"}
            >
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
