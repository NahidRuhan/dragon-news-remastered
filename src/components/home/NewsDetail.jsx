import { useParams,useLoaderData,useNavigate } from "react-router-dom";
import Title from "../shared/Title";
import Right from "../shared/Right";
import { IoMdArrowBack } from "react-icons/io";


const NewsDetail = () => {
    const news = useLoaderData();
    const id = useParams();
    const navigate = useNavigate();

    const filter = news.find(news => news._id === id.id);
    console.log(filter);
    
    return (
        <div>
            <Title></Title>
            <div className="grid grid-cols-4 gap-10">

                <div className="col-span-3 space-y-5">
                    <h1 className="font-bold">Dragon News</h1>

                    <div className="space-y-5 p-7 border">
                        <img src={filter.image_url} alt="img" />
                        <p className="font-bold text-2xl">{filter.title}</p>
                        <p className="text-[#706F6F]">{filter.details}</p>
                        <div><button onClick={()=> navigate(-1)} className="btn btn-primary bg-[#D72050] rounded-none"><span><IoMdArrowBack /></span>All news in this category</button></div>
                    </div>



                </div>





                <div><Right></Right></div>

            </div>
        </div>
    );
};

export default NewsDetail;