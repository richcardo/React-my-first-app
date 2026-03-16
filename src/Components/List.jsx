export default function List({list}) {
  return (
    <ul>
      {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  )
}