

export default function Description({ description }) {
  if (!description) {
    return null;
  }
  return description.map((value) => {
    const {
      text,
    } = value;
    return (
      <span
        key={text.content}
      >
        {text.content}
      </span>
    );
  });
}