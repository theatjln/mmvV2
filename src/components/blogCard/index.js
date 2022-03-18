import Link from "next/link";

export default function BlogCard(props) {
  console.log(`blog props: ${props.fields.title}`); 
 
  const { title, videoEmbedId, summary, slug } = props.fields;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div className="bg-gray-100 p-6 rounded-lg">
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
          <h2 className="text-lg text-indigo-500 font-semibold title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">
            {summary} &nbsp;
            <span className="text-indigo-600 font-display">{`...Read more`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
