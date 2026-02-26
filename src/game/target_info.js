import { getDate } from "../date_score";

let targetInfo = {
  "2026-02-24": ["quickly", "mountain"],
  "2026-02-25": ["blue", "whisper"],
  "2026-02-26": ["start", "target"],
  "2026-02-27": ["curious", "fox"],
  "2026-02-28": ["bright", "idea"],
  "2026-03-01": ["jump", "gracefully"],
  "2026-03-02": ["ancient", "library"],
  "2026-03-03": ["softly", "glow"],
  "2026-03-04": ["happy", "child"],
  "2026-03-05": ["build", "carefully"],
  "2026-03-06": ["stormy", "night"],
  "2026-03-07": ["elegant", "dance"],
  "2026-03-08": ["think", "deeply"],
  "2026-03-09": ["golden", "horizon"],
  "2026-03-10": ["laugh", "loudly"],
  "2026-03-11": ["quiet", "forest"],
  "2026-03-12": ["swift", "runner"],
  "2026-03-13": ["create", "boldly"],
  "2026-03-14": ["gentle", "breeze"],
  "2026-03-15": ["explore", "freely"]
};

export function getTargetInfo() {
  return targetInfo[getDate()];
}