export default function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((t, i) => (
          <span key={`${t}-${i}`} className="marquee__item">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
