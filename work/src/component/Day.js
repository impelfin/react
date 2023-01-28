import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';
import { Link } from 'react-router-dom';

export default function Day() {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if (day === 1) var prev_day = 1;
  if (day === day.length) var next_day = day.length;

  prev_day = Number(day) - 1;
  next_day = Number(day) + 1;

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
      <Link to={`/day/${prev_day}`}>Previous Day</Link>
      <Link to={`/day/${next_day}`}>Next Day</Link>
    </>
  );
}
