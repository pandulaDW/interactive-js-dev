import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repository
  );
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
