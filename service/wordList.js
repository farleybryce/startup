function getDate() {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}


function getTargetInfo() {
  return targetWords[getDate()];
}

module.exports = { getTargetInfo, getDate };

let targetWords = {
// April 2026
"2026-04-01": ["complex", "inanimate"],
"2026-04-02": ["alive", "fanciful"],
"2026-04-03": ["precise", "army"],
"2026-04-04": ["paper", "mischievous"],
"2026-04-05": ["violation", "fiction"],
"2026-04-06": ["given", "adorn"],
"2026-04-07": ["office", "wish"],
"2026-04-08": ["pursuit", "kick"],
"2026-04-09": ["specific", "buffoon"],
"2026-04-10": ["adjective", "hazard"],
"2026-04-11": ["entertainment", "crime"],
"2026-04-12": ["knowledge", "sweat"],
"2026-04-13": ["surge", "crystal"],
"2026-04-14": ["computer", "university"],
"2026-04-15": ["tree", "judge"],
"2026-04-16": ["mind", "fraction"],
"2026-04-17": ["draw", "diacritic"],
"2026-04-18": ["arrow", "destiny"],
"2026-04-19": ["overcome", "windmill"],
"2026-04-20": ["safety", "cross"],
"2026-04-21": ["rail", "alien"],
"2026-04-22": ["quantum", "handwriting"],
"2026-04-23": ["stamp", "jargon"],
"2026-04-24": ["cheat", "organism"],
"2026-04-25": ["travel", "dilute"],
"2026-04-26": ["worldly", "agency"],
"2026-04-27": ["textbook", "superior"],
"2026-04-28": ["tendril", "chess"],
"2026-04-29": ["appearance", "holy"],
"2026-04-30": ["interruption", "trait"],

// May 2026
"2026-05-01": ["likewise", "word"],
"2026-05-02": ["thing", "frequently"],
"2026-05-03": ["gradually", "sign"],
"2026-05-04": ["field", "primarily"],
"2026-05-05": ["shape", "scarcely"],
"2026-05-06": ["view", "sufficiently"],
"2026-05-07": ["ground", "properly"],
"2026-05-08": ["space", "markedly"],
"2026-05-09": ["level", "chiefly"],
"2026-05-10": ["line", "barely"],
"2026-05-11": ["step", "initially"],
"2026-05-12": ["top", "largely"],
"2026-05-13": ["back", "relatively"],
"2026-05-14": ["front", "consequently"],
"2026-05-15": ["near", "essentially"],
"2026-05-16": ["far", "partially"],
"2026-05-17": ["high", "fundamentally"],
"2026-05-18": ["low", "specifically"],
"2026-05-19": ["old", "typically"],
"2026-05-20": ["new", "pertaining"],
"2026-05-21": ["good", "regarding"],
"2026-05-22": ["bad", "involving"],
"2026-05-23": ["real", "existing"],
"2026-05-24": ["substance", "producing"],
"2026-05-25": ["function", "resembling"],
"2026-05-26": ["constitute", "signifying"],
"2026-05-27": ["manifest", "indicating"],
"2026-05-28": ["inherent", "expressing"],
"2026-05-29": ["distinct", "providing"],
"2026-05-30": ["essential", "containing"],
"2026-05-31": ["relating", "occurring"],

// June 2026
"2026-06-01": ["render", "aspect"],
"2026-06-02": ["element", "composed"],
"2026-06-03": ["primarily", "feature"],
"2026-06-04": ["wholly", "effect"],
"2026-06-05": ["manner", "altogether"],
"2026-06-06": ["point", "roughly"],
"2026-06-07": ["matter", "nearly"],
"2026-06-08": ["force", "seldom"],
"2026-06-09": ["center", "highly"],
"2026-06-10": ["outer", "despite"],
"2026-06-11": ["base", "underneath"],
"2026-06-12": ["limit", "purely"],
"2026-06-13": ["extent", "across"],
"2026-06-14": ["object", "merely"],
}