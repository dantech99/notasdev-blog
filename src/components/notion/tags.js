export default function Tags({ tag }) {
  return (
    <div
      key={tag.id}
      className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
      {tag.name}
    </div>
  );
}
