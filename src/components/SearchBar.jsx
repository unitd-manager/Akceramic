export default function SearchBar() {
  return (
    <div className="searchbar">
      <input placeholder="Enter keyword..." />
      <select>
        <option>Property Type</option>
      </select>

      <select>
        <option>Location</option>
      </select>

      <select>
        <option>Price</option>
      </select>

      <button>Search</button>
    </div>
  );
}