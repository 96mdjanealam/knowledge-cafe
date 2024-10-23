
const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className="py-4">
            <img className="max-h-96 w-full rounded-md object-cover" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 pt-4 pb-2">
                    <img className="w-14 h-14 object-cover rounded-full" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold">{author}</h3>
                        <p className="text-sm">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>{`#${hash} `}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;