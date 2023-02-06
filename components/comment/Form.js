export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data.tag);

    event.target.reset();
    event.target.elements.tag.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Comment</h2>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="tag" className="form__label"></label>
          <input
            id="tag"
            type="text"
            name="tag"
            className="form__input"
            required
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
