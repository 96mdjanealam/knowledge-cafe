

const Bookmark = ({bookmark}) => {
    
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 p-2 my-4 rounded-lg">
            <h3 className="text-lg">{title}</h3>
        </div>
    );
};

export default Bookmark;