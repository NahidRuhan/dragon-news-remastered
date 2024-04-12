import {useLoaderData} from 'react-router-dom'
import Marquee from "react-fast-marquee";

const Breaking = () => {
    const news = useLoaderData();
    const trendingTitles = news.filter(news => news.others_info.is_trending).map(news => news.title);  
    return (
        <div className='flex gap-3'>
            <div>
                <button className="btn btn-primary bg-[#D72050] rounded-none px-5 text-xl">Latest</button>
            </div>
            <Marquee>
                {
                    trendingTitles.map(trend => <span className='px-3 font-bold' key={trend._id}>{trend}</span>)
                }
            </Marquee>
        </div>
    );
};

export default Breaking;