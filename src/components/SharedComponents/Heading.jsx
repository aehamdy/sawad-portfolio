const headingMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

function Heading({ as = "h2", className, children }) {
  const HeadingComponent = headingMap[as];

  if (!HeadingComponent) {
    console.log(
      `Heading "${as}" is not defined in headingMap. Check your 'as' prop. Defaulting to 'h2'.`
    );

    return <h2>{children}</h2>;
  }

  return <HeadingComponent className={className}>{children}</HeadingComponent>;
}

export default Heading;
