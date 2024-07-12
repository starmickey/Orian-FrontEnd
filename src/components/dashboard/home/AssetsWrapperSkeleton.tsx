export default function AssetsWrapperSkeleton() {
  return (
    <div>
      <h3 className='pb-4 font-medium'>CRIPTO</h3>

      <ul className='flex list-none gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className={`border border-solid border-blue-gray-90 rounded-md 
              flex flex-col items-start h-18 w-44 p-4 gap-4 animate-pulse flex-shrink-0`
            }
          >
            <div className="bg-transparent-purple-20 h-2.5 w-6 rounded-sm"></div>
            <div className="flex items-center gap-1">
              <div className="bg-transparent-purple-20 h-3 w-16 rounded-sm"></div>
              <div className="bg-transparent-purple-20 h-2.5 w-5 rounded-sm"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
