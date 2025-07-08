
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Components/NewsCard";


const AllCategory = () => {
    const loaderData = useLoaderData();
    const news = loaderData?.data || []
    // console.log(news)

    return (
        <div>
            <h2 className="font-semibold">News Home</h2>
            <div className="">
                {
                    news.map(singleNews => <NewsCard news ={singleNews} key={singleNews._id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default AllCategory;