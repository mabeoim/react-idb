const headers = ["Name", "Occupation", "Hair Color", "Gender", "Phone"];

const renderTH = (header: string, i: number) => <th key={i}>{header}</th>;

const Header = () => {
  return (
    <thead>
      <tr>{headers.map(renderTH)}</tr>
    </thead>
  );
};

export default Header;
