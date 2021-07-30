import Link from "next/link"
import { getColorByKey } from "../../utils/color.util"

function Home({ collections }) {
  return (
    <>
      <div className="mt-7 text-3xl text-dark-100 text-center">
        <h1>Converter collections</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-evenly mt-10 border rounded-2xl border-gray-400 shadow p-8 gap-y-8">
          {collections.map(({ short, label, path }, key) => (
            <Link href={path}>
              <a className="w-1/3 flex justify-center">
                <div className="flex hover:bg-gray-700 border rounded-xl border-gray-600 w-48">
                  <h1
                    className=" px-4 py-3 text-white bg rounded-xl  text-2xl"
                    style={{
                      backgroundColor: getColorByKey(key)
                    }}
                  >
                    {short}
                  </h1>
                  <h1 className=" p-2 mt-2 text-gray-50 ">{label}</h1>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
