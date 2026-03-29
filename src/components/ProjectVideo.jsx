/**
 * Native HTML5 video with poster — replace `src` in projects.js with your own MP4s in /public/videos/ if preferred.
 */
export default function ProjectVideo({ title, location, poster, src }) {
  return (
    <figure className="project-video">
      <div className="project-video__frame">
        <video
          className="project-video__el"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title ? `Video: ${title}` : 'Project video'}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      {(title || location) && (
        <figcaption className="project-video__cap">
          {title && <strong>{title}</strong>}
          {location && <span>{location}</span>}
        </figcaption>
      )}
    </figure>
  )
}
