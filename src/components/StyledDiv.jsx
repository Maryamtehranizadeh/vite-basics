function StyledDiv({ children, title }) {
  const styles = { border: "2px solid", padding: "20px", margin: "20px" };
  return (
    <div style={styles}>
      <h1>Styled Div</h1>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default StyledDiv;
