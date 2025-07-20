import { useSelector } from "react-redux";

const Menu = () => {
  const { menus = [], isLoading, error } = useSelector((state) => state.menu || {});

  return (
    <div>
      <h2>Menus</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && menus.length === 0 && <p>No menus found.</p>}

      <ul>
        {menus.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
