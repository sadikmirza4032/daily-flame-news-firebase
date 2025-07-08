const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-5">Find Us On</h2>
      <div className="space-y-3 pt-10 *w-full flex flex-col">
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Login with Facebook
        </button>
        <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
          <svg
            aria-label="LinkedIn logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
              fillRule="evenodd"
            ></path>
          </svg>
          Login with LinkedIn
        </button>
        <button className="btn bg-[#2F2F2F] text-white border-black">
          <svg
            aria-label="Microsoft logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M96 96H247V247H96" fill="#f24f23"></path>
            <path d="M265 96V247H416V96" fill="#7eba03"></path>
            <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
            <path d="M265 265H416V416H265" fill="#f9ba00"></path>
          </svg>
          Login with Microsoft
        </button>
      </div>
    </div>
  );
};

export default FindUs;
