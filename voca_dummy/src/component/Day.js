import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day() {
  const { day } = useParams();
  const wordlist = dummy.words.filter((word) => word.day === Number(day));
  console.log(wordlist);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordlist.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
