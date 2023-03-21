import { useState } from "react";
import Typewriter from "typewriter-effect";

const vlieger = [
  `LUCHTPOST`,
  `<br/>`,
  `<br/>`,
  `Post! zei God verrast. Zij knoopte de brief los`,
  `<br/>`,
  `van de vlieger en las met verbazing de strekking.`,
  `<br/>`,
  `Och, wat vervelend, dacht zij, dat arme joch`,
  `<br/>`,
  `denkt dat zijn moeder hier nog ergens rondlummelt.`,
  `<br/>`,
  `<br/>`,
  `Denken die mensen na drie millennia nog steeds`,
  `<br/>`,
  `dat doden aan de hemel fonkelen als sterren`,
  `<br/>`,
  `boven eeuwige jachtvelden naast een maagdenfontein?`,
  `<br/>`,
  `Schiet weer lekker op met dat onderwijs op aarde.`,
  `<br/>`,
  `<br/>`,
  `Hoog tijd dat scheikunde een kernvak wordt, want jouw moeder`,
  `<br/>`,
  `schreef God terug, is overal, gedecomponeerd`,
  `<br/>`,
  `retour aan het universum. Gratis af te halen`,
  `<br/>`,
  `bij de lokale sterrenwacht: zeven quadriljard atomen.`,
  `<br/>`,
  `<br/>`,
  `Zie: een deel van haar hamert als hagel tegen de ruiten`,
  `<br/>`,
  `een deel vliegt als fijnstof uit de schoorsteen van je buren`,
  `<br/>`,
  `een deel van haar jeukt als eelt onder je grote teen`,
  `<br/>`,
  `een deel zit in de zuigsnuit van de mug die jou vannacht steekt.`,
  `<br/>`,
]

const sorted = vlieger.join('').split("<br/>").join('').split('').sort().join("");

function getLetterCount(textString) {
  const sorted = textString.toLowerCase().split('').sort().join('');
  const letters = sorted.split('').filter(letter => letter !== ' ')
  return letters.reduce((acc, letter) => {
    const found = acc.find(obj => obj.letter === letter)
    if (found) {
      found.count++
    } else {
      acc.push({ letter, count: 1 })
    }
    return acc
  }, [])
}

export default function TypeWriter() {

  const [typedLetters, setTypedLetters] = useState('');

  return (
    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", minHeight: 'calc(100vh - 12rem)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem 2rem', gap: '1rem', justifyContent: 'center', animation: '0.5s all linear' }}>{
        getLetterCount(typedLetters).map((obj, index) => {
          return <span key={index} style={{ margin: "5px", lineHeight: '30px', fontSize: `${16 + obj.count}px` }}>{obj.letter}</span>
        })
      }</div>
      <div>
        <Typewriter
          onInit={(typewriter) => {
            vlieger.forEach(sentence => {
              typewriter
                .changeDelay(30)
              if (sentence.includes(`<br/>`)) {
                typewriter
                  .pasteString(sentence)
                  .start()
              } else {
                typewriter
                  .typeString(sentence)
                  .start()
                  .callFunction(() => {
                    setTypedLetters((text) => text + sentence)
                  })
                  .pauseFor(500)
              }
            }
            )
            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
          }}
        />
      </div>
    </div>
  );
}
