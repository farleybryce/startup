const GameEvent = {
  System: 'system',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

const randomWords = [
  "crimson", "whistle", "jungle", "flicker", "marble", "tangle", "orbit", "quiver", "paddle", "glimpse",
  "ripple", "blizzard", "cobble", "sparkle", "drift", "thunder", "latch", "mingle", "breeze", "hollow",
  "flutter", "glisten", "shard", "twist", "echo", "wobble", "pebble", "sprint", "quaint", "frost",
  "meadow", "plume", "shimmer", "vault", "cascade", "whimsy", "cinder", "fumble", "gauge", "hatch",
  "tremble", "verdant", "pioneer", "murmur", "swoop", "fable", "glint", "wander", "sprout", "crackle"
];

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    const users = ['Bryce', 'Larry', 'Bob', 'John', 'Susan'];
    setInterval(() => {
      const word = randomWords[Math.floor(Math.random() * randomWords.length)];
      const userName = users[Math.floor(Math.random() * users.length)];
      this.broadcastEvent(userName, GameEvent.System, { currentWord: word });
    }, 5000);
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach(handler => handler(event));
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
