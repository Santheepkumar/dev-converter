import Image from "next/image";

function Login({ signInWithGoogle }) {
  return (
    <div className="mt-5 text-center bg-white w-96 rounded-xl max-w-5xl mx-auto">
      <div className="py-20">
        <div className="flex justify-center ml-5">
          <Image
            className="block h-5 "
            src={require("../assets/images/Group.png")}
            alt="converterdev"
            width="300"
            height="80"
          />
        </div>
        <div className="mb-14">
          <h1 className="mt-5 text-3xl text-dark-800">Welcome</h1>
          <h1 className="text-dark-600 mt-4">
            Log the dev converter to convert your text
          </h1>
        </div>
        <div className="mt-7 ml-7 w-80 b  ">
          <h1 className="p-1 flex justify-center  text-dark-800 text-base  rounded-md border border-dark-300 bg-white ">
            <Image
              className="block h-5 "
              src={require("../assets/images/google.png")}
              alt="converterdev"
              width="35"
              height="35"
            />
            <button className="focus:outline-none" onClick={signInWithGoogle}>
              Login with Google
            </button>
          </h1>

          <h1 className="p-1 flex justify-center text-dark-800  mt-5 text-base border border-gray-300 rounded-md">
            <Image
              className="block h-5"
              src={require("../assets/images/GitHub-Mark.png")}
              alt="converterdev"
              width="32"
              height="32"
            />
            <button>Login with GitHub</button>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Login;
