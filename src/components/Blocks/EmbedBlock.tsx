export default function EmbedBlock({content, url, caption }: any) {

  return (
    <div className="embed-block p-5">
      <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
        <div className="wp-block-embed__wrapper">
          <iframe
            title="Gutenberg in Headless WordPress: WPGraphQL Gutenberg"
            width="100%"
            height="381"
            src={`${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <figcaption className="wp-element-caption">{caption}</figcaption>
      </figure>
    </div>
  );
}
