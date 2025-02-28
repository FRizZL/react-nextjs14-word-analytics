export default function Stats({
  stats: {
    numberOfWords,
    numberOfCharacters,
    instagramCharactersLeft,
    facebookCharactersLeft,
  },
}: Readonly<{
  stats: {
    numberOfWords: number;
    numberOfCharacters: number;
    instagramCharactersLeft: number;
    facebookCharactersLeft: number;
  };
}>) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagramCharactersLeft} label="Instagram" />
      <Stat number={facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number = 0, label }: Readonly<{ number?: number; label: string }>) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
