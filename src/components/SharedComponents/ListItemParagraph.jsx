function ListItemParagraph({ text, className }) {
  return (
    <p className={`text-sm md:text-base text-content-primary ${className}`}>
      {text}
    </p>
  );
}

export default ListItemParagraph;
