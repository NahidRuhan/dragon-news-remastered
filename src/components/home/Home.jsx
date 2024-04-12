import Nav from "../shared/Nav";
import Title from "../shared/Title";
import Breaking from "./Breaking";
import Right from "../shared/Right";
import { useEffect, useState } from "react";
import { useLoaderData} from 'react-router-dom'
import NewsCard from "./NewsCard";

const Home = () => {
    const [category,setCategory] = useState([])
    const [selectedId,setSelectedId] = useState(0)
    const news = useLoaderData();
    const filteredNews = news.filter(news => news.category_id === selectedId)
    // console.log(news);

    useEffect(()=>{

        fetch('/categories.json')
        .then(res => res.json())
        .then(data=>setCategory(data))

    },[])
    return (
        <div>
            <Title></Title>
            <Breaking></Breaking>
            <Nav></Nav>
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3">

                    <div className="grid grid-cols-3 gap-3">

                        <div>

                            <h1 className="font-bold py-3">All Category</h1>
                            <ul className="pl-5 font-bold text-[#9F9F9F] space-y-3">

                                {
                                    category.map(category => <li key={category.id} onClick={() => setSelectedId(category.id)} className="hover:cursor-pointer">
                                    {category.name}
                                  </li>)
                                }

                            </ul>

                        </div>

                        <div className="col-span-2">

                            <div className="space-y-5">
    {
                                selectedId==0 ? news.map(news=> <NewsCard key={news._id} news={news}></NewsCard>) : filteredNews.map(news=> <NewsCard key={news._id} news={news}></NewsCard>)
                                }
                            </div>

                            

                        </div>
                    </div>
                    
                </div>
                <div><Right></Right></div>
            </div>
        </div>
    );
};

export default Home;