import { Link, useLoaderData } from "react-router-dom";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Header from "../../Components/Header";
import RightLayout from "../../Layout/RightLayout";
import NavBar from "../../Components/NavBar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data?.data?.[0];

  console.log("Loaded news:", news);

  if (!news) {
    return <p className="text-center text-red-500 font-semibold py-10"> News Not Found</p>;
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
       <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold text-2xl mb-4">📰 Dragon News</h2>

          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5 border">
            {/* Author + Actions */}
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-4">
                <img
                  src={news.author?.img}
                  alt={news.author?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    {news.author?.name || "Unknown"}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {news.author?.published_date || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 text-gray-500 text-lg">
                <BsBookmark className="cursor-pointer" />
                <FaShareAlt className="cursor-pointer" />
              </div>
            </div>

            {/* Image */}
            <img
              src={news.image_url}
              alt={news.title}
              className="rounded-xl w-full h-72 object-cover"
            />

            {/* Title & Details */}
            <h2 className="text-2xl font-bold">{news.title}</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              {news.details}
            </p>

            {/* Footer: rating + view */}
            <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-600">
              <span className="flex items-center gap-1 text-orange-500 font-medium">
                <AiFillStar /> {news.rating?.number || "N/A"}
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {news.total_view || 0}
              </span>
            </div>

            {/* Back Button */}
            <div className="pt-5">
              <Link
                to={`/category/${news.category_id}`}
                className="btn btn-primary rounded-md"
              >
                🔙 Back to Category
              </Link>
            </div>
          </div>
        </section>

        <aside className="col-span-3">
          <RightLayout />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
