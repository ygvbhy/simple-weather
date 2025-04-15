import { useState, useEffect } from "react";
import { BookMark } from "../../types";
import BookMarkAddForm from "./BookMarkForm";
import BookMarkList from "./BookMarkList";

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
  const [isModify, setIsModify] = useState(false);

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
    setLocalStorageBookMark(newBookMarkList);
  };

  const handleEditBookMark = (id: number) => {
    const newBookMarkList = bookMarkList.map((bookMark) => {
      if (bookMark.id === id) {
        return { ...bookMark, name: addBookMark.name, url: addBookMark.url };
      }
      return bookMark;
    });
    setLocalStorageBookMark(newBookMarkList);
    setBookMarkList(newBookMarkList);
    setAddBookMark({ name: "", url: "https://", id: 0 });
    setIsModify(false);
  };

  const handleClickModifyBookMark = (id: number) => {
    setIsModify(true);
    setAddBookMark({
      name: bookMarkList.find((bookMark) => bookMark.id === id)?.name || "",
      url: bookMarkList.find((bookMark) => bookMark.id === id)?.url || "",
      id: id,
    });
  };

  const setLocalStorageBookMark = (newBookMarkList: BookMark[]) => {
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
            <BookMarkList
              key={bookMark.id}
              bookMark={bookMark}
              handleDeleteBookMark={handleDeleteBookMark}
              handleClickModifyBookMark={handleClickModifyBookMark}
            />
          ))}
        </ul>
      </div>
      <hr className="my-4 border-gray-300" />
      <BookMarkAddForm
        addBookMark={addBookMark}
        setAddBookMark={setAddBookMark}
        handleAddBookMark={handleAddBookMark}
        handleModifyBookMark={handleEditBookMark}
        isModify={isModify}
      />
    </div>
  );
};

export default BookMarker;
