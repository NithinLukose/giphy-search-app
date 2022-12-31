export default function SearchGIF(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>Cat Giphy Search App</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm;
  return {
    props: {
      searchTerm,
    },
  };
}
