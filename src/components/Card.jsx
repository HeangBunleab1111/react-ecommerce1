import { Link } from "react-router-dom";
function Card(props) {
  const {data} = props
  return (
    <Link to={`/product/${data.id}`} className="border border-gray-400 p-2 overflow-hidden">
      <figure className="h-[160px] lg:h-[260px] group ">
        <img
          className="h-full w-full object-cover group-hover:scale-110 transition-all "
          src={data.image}
          alt=""
        />
      </figure>
      <div className="py-2">
        <p className="line-clamp-1">{data.title}</p>
        <p className="text-red-600">{data.price}$</p>
      </div>
    </Link>




    
  );
}

export default Card;


