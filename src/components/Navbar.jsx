export default function Navbar(props) {
  const {setSearchQuery} = props

  let data = [
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  const dataMap = data.map((el, i) => {
    return (
      <div key={i} className="category-list">
        {el}
      </div>
    );
  });

  const handleSearch = (event) => {
    event.preventDefault()
    if(event.key === "Enter") {
      setSearchQuery(event.target.value)
    }
  }
  return (
    <div className="main-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-container">
            <img src="https://logodix.com/logo/1160148.png" alt="logo" />
          </div>
          <div className="dropdown">
            <div className="dropdown-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="dropdown-category">Category</p>
            </div>
            <div className="dropdown-content">
              <div className="dropdown-frame">{dataMap}</div>
            </div>
          </div>
        </div>
          <div className="search">
            <form className="search-container">
              <input
                type="text"
                name="search"
                placeholder="Search Movie"
                className="input-search"
              />
              <button type="submit" className="button-submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 15L21 21"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="gray"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}
