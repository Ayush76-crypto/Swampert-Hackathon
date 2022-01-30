import Cards from "./Cards";
import Data from "./Data";

function Blog() {
  return (
    <div className="bg-lime bg-rice bg-no-repeat bg-right-top bg-fixed  scroll-smooth">
      <div className="flex justify-center">
        <div className="font-bold text-3xl p-10">Blogs</div>
      </div>
      <div className="flex justify-left mt-10 ml-28">
        <div className="font-bold">Most Popular</div>
      </div>
      <div className="bg-lime bg-rice bg-no-repeat bg-right-top bg-fixed min-h-screen scroll-smooth p-5">
        <div className=" flex flex-row overflow-x-scroll md:overflow-hidden mx-5">
          {Data.map((Data) => {
            return <Cards title={Data.title} desc={Data.desc} />;
          })}
        </div>
      </div>
      <div className="min-w-fit bg-white text rounded-lg md:overflow-hidden shadow-lg mx-20 p-10 md-shrink md:w-200">
        <div className="font-bold">Want to post something on the blog?</div>
        <div className=" flex md:text-clip md:shrink md:overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          fringilla congue aliquet. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean fringilla congue aliquet.
        </div>
        <div className="mt-5">
          <button className="bg-mint px-10 py-4 rounded-full shadow-lg">
            Create Post
          </button>
        </div>
      </div>
      <div className="flex justify-left mt-10 ml-28">
        <div className="font-bold">Latest Posts</div>
      </div>

      <div className=" flex flex-row overflow-x-scroll md:overflow-hidden mx-5">
        {Data.map((Data) => {
          return <Cards title={Data.title} desc={Data.desc} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
