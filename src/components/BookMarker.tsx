import { useState, useEffect } from "react";
import { BookMark } from "../types";

const BookMarker = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [addBookMark, setAddBookMark] = useState({
    name: "",
    url: "https://",
    id: 0,
  });

  const [bookMarkList, setBookMarkList] = useState<BookMark[]>([]);

  const handleAddBookMark = () => {
    if (addBookMark.name === "" || addBookMark.url === "https://") {
      alert("Please enter a name and URL");
      return;
    }
    if (!addBookMark.url.includes("https://")) {
      alert("Please enter a valid URL");
      return;
    }

    const newBookMark = { ...addBookMark, id: bookMarkList.length };
    localStorage.setItem("bookMark", JSON.stringify([...bookMarkList, newBookMark]));
    setBookMarkList([...bookMarkList, newBookMark]);
    setAddBookMark({ name: "", url: "https://", id: 0 });
  };

  const handleDeleteBookMark = (id: number) => {
    const newBookMarkList = bookMarkList.filter((bookMark) => bookMark.id !== id);
    localStorage.setItem("bookMark", JSON.stringify(newBookMarkList));
    setBookMarkList(newBookMarkList);
  };

  useEffect(() => {
    const bookMark = localStorage.getItem("bookMark");
    if (bookMark) {
      setBookMarkList(JSON.parse(bookMark));
    }
  }, []);

  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto
        bg-white dark:bg-gray-800 opacity-80
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        BookMark
      </h5>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {bookMarkList.map((bookMark) => (
            <li key={bookMark.id}>
              <a
                href={bookMark.url}
                target="_blank"
                className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${bookMark.url}`}
                    alt="북마크 이미지"
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ms-3">{bookMark.name}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDeleteBookMark(bookMark.id);
                  }}
                  className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4 border-gray-300" />
      <div>
        <input
          className="w-full rounded-full border-1 border-gray-300 p-2 bg-gray-200 text-black px-6 opacity-50 focus:border-gray-500 focus:outline-none mb-3"
          type="text"
          placeholder="BookMark name"
          value={addBookMark.name}
          onChange={(e) => {
            setAddBookMark({ ...addBookMark, name: e.target.value });
          }}
        />
        <input
          className="w-full rounded-full border-1 border-gray-300 p-2 bg-gray-200 text-black px-6 opacity-50 focus:border-gray-500 focus:outline-none mb-3"
          type="url"
          placeholder="BookMark URL"
          value={addBookMark.url}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddBookMark();
          }}
          onChange={(e) => {
            setAddBookMark({ ...addBookMark, url: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          type="button"
          className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddBookMark}
        >
          Add BookMark
        </button>
      </div>
    </div>
  );
};

export default BookMarker;
