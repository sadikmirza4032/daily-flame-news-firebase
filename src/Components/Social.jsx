import { FaGoogle, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="my-3 space-y-3 w-full flex flex-col">
        <button className="btn">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default Social;
