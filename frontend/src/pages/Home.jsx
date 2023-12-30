import {Link} from 'react-router-dom'
import ticTacToeImage from "../assets/tic-tac-toe.png"

const Home = () => {
    return (
        <div className="grid place-items-center grid-cols-2 absolute left-0 top-0 w-[100%] h-[100%]">
            <div className="grid place-content-center w-[50%] h-[100%]">
                <h1 className="font-sans w-[100%] text-left font-bold">
                    Tik Tak Toe
                </h1>
                <Link to='/game' className="grid w-32 mt-10 text-left text-white transition-all duration-150 rounded-lg hover:text-black h-14 place-content-center text-bold hover:bg-slate-300 bg-slate-400">
                    Start playing
                </Link>
            </div>
            <img src={ticTacToeImage} />
        </div>
    )
}
export default Home