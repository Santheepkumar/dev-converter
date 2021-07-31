import { useState } from "react"
import { getColorByKey } from "../../utils/color.util"

function ConverterOptions({ converters, setCC, currConverter }) {
  const [show, setShow] = useState(false)
  return (
    <div className="">
      <div className="flex justify-center mt-2">
        <button
          type="button"
          className="
      text-dark-300
      group
      bg-gray-800
      border
      px-4
      py-1.5
      
      border-gray-200
      rounded-md
      inline-flex
      items-center
      text-base
      font-medium
      hover:text-white
      focus:outline-none focus:ring focus:ring-brand-100

    "
          onClick={() => setShow(!show)}
          aria-expanded="false"
        >
          <span>Select Converter</span>

          <svg
            className="
            animate-bounce
        text-gray-400
        ml-2
        h-5
        w-5
        group-hover:text-dark-300
        transition
        ease-in-out
        duration-150
      "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {show && (
        <div
          className="
      mt-4
      mx-auto
      w-screen
      max-w-md
      sm:px-0
      lg:max-w-3xl
    "
        >
          <div
            className="
        rounded-lg
        shadow-lg
        ring-1 ring-gray-50 ring-opacity-5
        overflow-hidden
      "
          >
            <div
              className="
          relative
          grid
          gap-6
          bg-gray-800
          px-5
          py-6
          sm:gap-8 sm:p-8
          lg:grid-cols-2
        "
            >
              {converters.map((con, key) => (
                <a
                  key={con.functionName}
                  href="#"
                  className={`
            -m-3
            p-3
            flex
            items-start
            rounded-lg
            hover:bg-gray-700
            transition
            ease-in-out
            duration-150
            ${con.functionName === currConverter.functionName && "bg-gray-600"}
          `}
                  onClick={() => setCC(con)}
                >
                  <div
                    className="
              flex-shrink-0 flex
              items-center
              justify-center
              h-10
              w-10
              rounded-md
              
              text-white
              sm:h-12 sm:w-12
            "
                    style={{
                      backgroundColor: getColorByKey(key)
                    }}
                  >
                    <div className="text-2xl">{con.label.slice(0, 1)}</div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-white">
                      {con.label}{" "}
                      {con.functionName === currConverter.functionName && "(Active)"}
                    </p>
                    <p className="mt-1 text-sm text-dark-300">
                      Get a better understanding of where your traffic is coming
                      from.
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConverterOptions
