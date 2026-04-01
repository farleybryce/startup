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


class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'connected' }));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new EventMessage('Startup', GameEvent.System, { msg: 'disconnected' }));
    };
    this.socket.onmessage = (msg) => {
      console.log("RAW RECEIVED:", msg.data);

      try {
        const event = JSON.parse(msg.data);
        console.log("PARSED EVENT:", event);

        this.receiveEvent(event);
      } catch (e) {
        console.error("PARSE FAILED:", e, msg.data);
      }
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
    console.log("Sending: ", event);
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
    console.log("Dispatched event: ", event);
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
