import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';
import { Link } from 'react-router-dom';

export default function Day() {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  function pre_day_move() {
    let prev_day = Number(day) - 1;
    console.log(prev_day);
    <Link to={`/day/${prev_day}`}></Link>;
  }

  function next_day_move() {
    let next_day = Number(day) + 1;
    console.log(next_day);
    <Link to={`/day/${next_day}`}></Link>;
  }

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <button onClick={pre_day_move}> Previous Day </button>
      <button onClick={next_day_move}> Next Day </button>
    </>
  );
}
