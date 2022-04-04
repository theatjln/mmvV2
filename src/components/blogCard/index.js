import Link from "next/link"; 

export default function BlogCard(props) {
  const { title, videoEmbedId, summary, slug } = props.fields;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="blog-card-wrapper py-4 hover:cursor-pointer">
        <div className="blog-card shadow-lg bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row">
          <div className="flex xs:w-full md:w-1/2 md:mr-10">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoEmbedId}?autoplay=0&loop=1&playlist=${videoEmbedId}&controls=1&showinfo=0&autohide=1&modestbranding=0&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="h-40 xl:h-64 2xl:h-410px rounded w-full object-cover object-center mb-6"
            />
          </div>
          <div className="flex flex-col xs:w-full md:w-1/2">
            <h2 className="text-lg text-indigo-800 font-semibold title-font mb-4">
              {title}
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              {summary} &nbsp;
              <span className="text-indigo-800 font-display">{`...Read more`}</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
