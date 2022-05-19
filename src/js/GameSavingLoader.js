import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const result = await json(response);
    return result;
  }
}
