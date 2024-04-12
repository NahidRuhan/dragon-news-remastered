/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { rating, author, title, image_url, details, _id, total_view } = news;
  return (
    <div className="border shadow-lg space-y-5">
      <div className="flex justify-between items-center bg-base-300 py-3 px-5">
        <div className="flex gap-5">
          <img className="w-12 rounded-full" src={author.img} alt="img" />
          <div>
            <p className="font-bold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-5">
          <p>
            <FaBookmark />
          </p>
          <p>
            <FaShareAlt />
          </p>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div className="space-y-5">
          <h1 className="font-bold text-xl">{title}</h1>
          <img src={image_url} alt="huh" />
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More...
              </Link>
            </p>
          ) : (
            <p>
              {details}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More...
              </Link>
            </p>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <p className="pl-3">{rating.number}</p>
          </div>
          <p className="flex items-center gap-3">
            <span>
              <FaEye />
            </span>
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
