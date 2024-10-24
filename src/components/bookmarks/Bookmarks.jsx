import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="sm:w-1/2 md:w-1/3 m-2 p-2 lg:p-4 bg-gray-50 rounded-lg">
            <h3>Reading Time: {readingTime}</h3>
            <h2 className="text-center font-bold">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;