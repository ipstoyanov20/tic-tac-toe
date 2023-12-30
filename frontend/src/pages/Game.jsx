
import { useState, useEffect} from 'react'
import logoX from "../assets/close.png"
import logoO from '../assets/circle.png'

const Game = () => {

	const [gameBoard, setGameBoard] = useState(Array(3).fill().map(() => Array(3).fill(null)));
	const [turns, setTurns] = useState(Array(3).fill().map(() => Array(3).fill(null)));
    const [turn, setTurn] = useState(0)
	useEffect(() => {
		fetch("http://localhost:8000/game")
			.then(response => response.json())
			.then(data => {
				setGameBoard(data.board)
				setTurns(data.turns)
				setTurn(data.turn)
			
			})
			.catch(error => console.error('Error:', error));
	}, []);

    return (
		<main className="h-full w-full">
			<div className="inline-flex ">
				<img src={logoX} className="w-20 h-20 m-5" alt="X" />
				<img src={logoO} className="w-20 h-20 m-5" alt="O" />
			</div>
			<h1 className="mb-10">Tik tae toe</h1>
			<div className="">
				<div className="grid grid-cols-3">
					{
						gameBoard.map((row, rowIndex) => {
							return row.map((item, colIndex) => {
								return (
									<button
										key={`${rowIndex}-${colIndex}`}
										onClick={() => {
											const newArray = [...gameBoard];
											newArray[rowIndex][colIndex] = 1;
											setGameBoard(newArray);

											turn == -1 ? setTurn(2) : setTurn(-1);

											const newArrayTurns = [...turns];
											newArrayTurns[rowIndex][colIndex] = turn;
											setTurns(newArrayTurns);

											console.table(gameBoard);



										}}
										className="bg-gray-600 m-2 w-28 h-28 grid place-items-center"
										disabled={item}
									>
										{gameBoard[rowIndex][colIndex] ? (
											turns[rowIndex][colIndex] == -1 ? (
												<img
													src={logoX}
													className="w-10 h-10 m-5 transition-all duration-100"
													alt="X"
												/>
											) : (
												<img
													src={logoO}
													className="w-10 h-10 m-5 transition-all duration-100"
													alt="X"
												/>
											)
										) : null}
									</button>
								);
							});
						})
					}
				</div>
			</div>
		</main>
	)
}
export default Game