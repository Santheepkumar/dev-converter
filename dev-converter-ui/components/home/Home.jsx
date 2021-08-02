import Link from "next/link";
import { getColorByKey } from "../../utils/color.util";

function Home({ collections }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold mt-7 text-2xl sm:text-4xl text-gray-100 px-2">
        Converter collections
      </h1>
      <div className="flex flex-wrap justify-evenly mt-5 sm:mt-10 border rounded-2xl border-gray-400 shadow p-8 gap-y-8 m-2">
        {collections.map(({ short, label, path, description }, key) => (
          <Link href={path} key={path}>
            <a className="md:w-1/2 xl:w-1/3">
              <div className="flex bg-gray-900 hover:bg-gray-600 border rounded-xl border-gray-600 w-60 sm:w-80">
                <div>
                  <h1
                    className=" px-5 py-6 text-white bg rounded-xl  text-3xl"
                    style={{
                      backgroundColor: getColorByKey(key)
                    }}
                  >
                    {short}
                  </h1>
                </div>
                <div>
                  <h1 className="ml-3 mt-6 sm:mt-4 text-white sm:font-bold text-2xl sm:text-lg">
                    {label}
                  </h1>
                  <h1 className="hidden sm:block text-gray-300 ml-3 break-words pr-2">
                    {description}
                  </h1>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
