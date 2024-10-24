import profile from "../../assets/profile.png"

const Header = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center py-4 border-b-2">
            <div className="flex flex-row items-center gap-2">
                <img className="w-12" src="knowledge.png" alt="" />
            <h1 className='text-4xl font-bold'> Knowledge Cafe</h1>
            </div>
            
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;