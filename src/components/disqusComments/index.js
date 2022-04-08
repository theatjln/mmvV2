import { DiscussionEmbed } from "disqus-react";

import classes from "./index.module.scss";

export default function Comments({ post }) {
  const disqusShortname = "markmarkusviajero";
  const disqusConfig = {
    // url: "https://your-site-url/post-slug",
    url: `${process.env.NEXT_PUBLIC_API_URL}/posts/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };

  return (
    <div className={classes.comments}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      <style>{`
        #disqus_thread {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
