export default function Form({ sumbmitHandler, children }) {
  return (
    <>
      <form onSubmit={sumbmitHandler}>
        {children}
      </form>
    </>
  );
}
