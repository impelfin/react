import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';
import { Link } from 'react-router-dom';

export default function Day() {
  const { day } = useParams();
  const days = useFetch('http://localhost:3001/days');

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if (Number(day) === 1) {
    var prev_day = 1;
    var next_day = 2;
  } else if (Number(day) === days.length) {
    prev_day = Number(day) - 1;
    next_day = Number(day);
  } else {
    prev_day = Number(day) - 1;
    next_day = Number(day) + 1;
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
      <div className="day_mv_div">
        <div className="menu">
          <ul className="day_mv">
            <li>
              <Link to={`/day/${prev_day}`}> ◀️ </Link>
            </li>
            <li>
              <Link to={`/day/${next_day}`}> ▶️ </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
