import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const INSTAGRAM_MAX_CHARACTERS = 280;
  const FACEBOOK_MAX_CHARACTERS = 2200;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;

  const stats = {
    numberOfWords,
    numberOfCharacters,
    instagramCharactersLeft,
    facebookCharactersLeft,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
