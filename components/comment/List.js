export default function List({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      <ul className="tag-list">
        {comments?.map((comment, index) => (
          <li key={index} className="tag-list__item">
            <h3>{comment.graffitiPostId}</h3>
            <h4>{comment.comment}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
