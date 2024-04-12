import {useLoaderData} from 'react-router-dom'
import Marquee from "react-fast-marquee";

const Breaking = () => {
    const news = useLoaderData();
    const trending = news.filter(news=> news.others_info.is_trending)
    
    return (
        <div className='flex gap-3'>
            <div>
                <button className="btn btn-primary bg-[#D72050] rounded-none">Latest</button>
            </div>
            <Marquee>
                {
                    trending.map(trend => <span className='px-3 font-bold' key={trend._id}>{trend.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default Breaking;