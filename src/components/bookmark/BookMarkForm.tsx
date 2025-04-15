import { BookMark } from "../../types";

const BookMarkAddForm = ({
  addBookMark,
  setAddBookMark,
  handleAddBookMark,
  handleModifyBookMark,
  isModify,
}: {
  addBookMark: BookMark;
  setAddBookMark: (addBookMark: BookMark) => void;
  handleAddBookMark: () => void;
  handleModifyBookMark: (id: number) => void;
  isModify: boolean;
}) => {
  if (isModify) document.getElementById("bookMarkName")?.focus();
  return (
    <>
      <div>
        <input
          className="w-full rounded-full border-1 border-gray-300 p-2 bg-gray-200 text-black px-6 opacity-50 focus:border-gray-500 focus:outline-none mb-3"
          type="text"
          id="bookMarkName"
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
            if (e.key === "Enter") {
              if (isModify) {
                handleModifyBookMark(addBookMark.id);
              } else {
                handleAddBookMark();
              }
            }
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
          onClick={isModify ? () => handleModifyBookMark(addBookMark.id) : handleAddBookMark}
        >
          {isModify ? "Modify BookMark" : "Add BookMark"}
        </button>
      </div>
    </>
  );
};
export default BookMarkAddForm;
