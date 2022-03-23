import Link from "next/link";

export default function BlogCard(props) {  
 
  const { title, videoEmbedId, summary, slug } = props.fields;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="xl:w-4/5 md:w-4/5 w-full p-4 hover:cursor-pointer">
        <div className="bg-gray-100 p-6 rounded-lg flex xs:flex-col md:flex-row">
          <div className="flex xs:w-full md:w-1/2 mr-10">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoEmbedId}?autoplay=0&loop=1&playlist=${videoEmbedId}&controls=1&showinfo=0&autohide=1&modestbranding=0&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="h-56 sm:h-72 md:h-40 lg:h-60 rounded w-full object-cover object-center mb-6"
            />
          </div>
          <div className="flex flex-col xs:w-full md:w-1/2">
            <h2 className="text-lg text-indigo-500 font-semibold title-font mb-4">
              {title}
            </h2>
            <p className="leading-relaxed text-sm md:text-base">
              {summary} &nbsp;
              <span className="text-indigo-600 font-display">{`...Read more`}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
