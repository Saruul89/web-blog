export default function SinglePostPage({ article }) {
  return (
    <div className="w-full">
      <div className="container max-w-[1216px] flex justify-center m-auto">
        <div>
          <div className="container max-w-[680px] mt-[150px]">
            <h1 className="font-semibold text-[#181A2A] text-4xl w-full">
              {article?.title}
            </h1>
            <div className="flex gap-8 mt-5 mb-5">
              <img
                src={article.user?.profile_image}
                alt=""
                className="rounded-[50%] w-7 h-7"
              />
              {article.user?.name}
              <p>2024/09/05</p>
            </div>
            <div>
              <img
                src={article?.cover_image}
                alt=""
                className="rounded-xl mb-5"
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              laborum nobis odio qui ad nihil facere asperiores alias minima
              deserunt. Totam ipsum pariatur quis iure beatae consectetur,
              voluptates molestiae esse eveniet. Tempora velit dolor culpa totam
              odio unde a ea omnis. Eos, vero autem, nemo sit omnis nisi tempora
              aperiam eaque beatae velit itaque voluptatibus minima inventore
              quod error voluptatum, in nostrum expedita dolor nobis accusantium
              non saepe voluptate! Dignissimos architecto asperiores officia
              amet! Eum quam non voluptatem dolor consequatur magni, vel
              sapiente repellendus harum id iure earum, nulla voluptate facere!
              Dolores ducimus, quidem perspiciatis minus omnis quos asperiores
              dolorem?
            </p>
            <p className="text-2xl font-semibold mb-4 mt-4">
              {article.description}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              aliquid praesentium error sapiente, magnam ea iure libero sequi
              fugiat non aliquam, at cumque expedita corrupti, atque voluptates
              doloribus eveniet quaerat ut repellendus animi quo natus adipisci
              asperiores. Fugit explicabo placeat culpa in sint quis esse
              aliquam, officiis expedita saepe. Possimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
