import { FaEye, FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { title, details, image_url, author, total_view, rating } = news;

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">
              {author?.name || "Unknown"}
            </h4>
            <p className="text-xs text-gray-500">{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <BsBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 object-cover rounded"
      />

      {/* Description */}
      <p className="text-gray-700 text-sm">
        {details.slice(0, 300)}...
        <Link to={`/news/${news._id}`} className="text-red-500 font-medium cursor-pointer">
          {" "}
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <AiFillStar />
          <span className="text-gray-800 font-medium">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
