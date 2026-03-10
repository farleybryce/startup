import { getDate } from "../date";
import  {convertDefinitionsToString, getAllDefinitions} from './definition_call'

let targetWords = [
  ["jump", "gracefully"],
  ["ancient", "target"]
];

export function getTargetWords() {
  return targetWords[1];
}

export async function generateTodaysWord() {
    const yesterday = targetInfo[1];
    word1 = chainDefinitions(5, yesterday);
    word2 = chainDefinitions(10, word1)    
}

async function getDefinitionsArray (word) {
    const entry = await getEntry(word);
    const definitions = getAllDefinitions(entry);
    return definitions
}

function chooseWordInDefinitions(definitions) {
    const randomDefinition = definitions[Math.floor(Math.random() * definitions.length)];
    const wordArray = randomDefinition.split(" ").replace(/('s\b|[.,!?;"():])/g, "").toLowerCase();
    const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return randomWord;
}

async function chainDefinitions(stepNum, word) {
    let currentWord = word;

    for (let i = 0; i < stepNum; i++) {
        let success = false;

        while (!success) {
            try {
                const definitions = await getDefinitionsArray(currentWord);
                const chosenWord = chooseWordInDefinitions(definitions);
                console.log(chosenWord);
                currentWord = chosenWord;
                success = true;
            } catch (error) {
                console.error("Retrying due to error:", error);
            }
        }
    }

    return currentWord;
}
//choose word in def
//try to access it
//if not choose another word
//repeat prev 2
//when successful, set root word
//repeat above
