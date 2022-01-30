function createBlog() {
  return (
    <div className="flex flex-col justify-center items-center bg-lime bg-rice bg-no-repeat bg-right-top bg-fixed h-screen scroll-smooth">
      <div className="font-bold mt-5 text-4xl">Blog Create</div>
      <div className="flex justify-left flex-col bg-white rounded-lg min-w-fit p-10 m-10 w-9/12 h-5/6">
        <div className="font-bold text-xl">Title</div>
        <input className="border-b-2 w-32 select-none" type="text" />
        <div className="font-bold text-xl align-text-top mt-5">Content</div>
        <textarea class="drop-shadow-xl border rounded-lg w-11/12 h-5/6 select-none"></textarea>
      </div>
    </div>
  );
}

export default createBlog;
