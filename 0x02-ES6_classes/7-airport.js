class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}

export default Airport;
