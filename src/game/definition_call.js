export async function getEntry(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching the dictionary entry:', error);
        throw error;
    }
}

export function getPhonetic(entry) {
    if (entry.phonetic) return entry.phonetic || '';

    const phoneticObj = entry.phonetics?.find(p => p.text);
    return phoneticObj?.text || '';
}

function getAllDefinitions(entry) {
  return entry.meanings?.flatMap(
    meaning => meaning.definitions ?? []
  )
  .map(def => def.definition ?? "")
  .filter(Boolean) ?? [];
}


export function convertDefinitionsToString(entry) {
    const definitions = getAllDefinitions(entry);
    let defParagraph = ""
    for (let i = 0; i < definitions.length; i++) {
        defParagraph += `${i+1}. ${definitions[i]}\n`;
    }
    return defParagraph;
}