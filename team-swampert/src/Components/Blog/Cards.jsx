function Cards(props) {
  return (
    <div className="aspect-4/3 bg-white rounded-lg  shadow-lg   m-5">
      <img
        className="rounded-t-lg"
        src={require("../assets/blog-images/profile.jpg")}
        alt="Display"
      />
      <div className="px-6 py-4">
        <div className="font-bold  text-xl mb-2">{props.title}</div>
        <p className=" text-base">{props.desc}</p>
      </div>
    </div>
  );
}

export default Cards;
