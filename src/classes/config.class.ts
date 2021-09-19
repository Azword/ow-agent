import dotenv from 'dotenv';
import { BehaviorSubject } from 'rxjs';

import { IConfig } from '../models/config.model';
import { exitWithError } from '../utils/process.utils';

export class Config {
  private readonly _config$ = new BehaviorSubject<IConfig | undefined>(undefined);

  load() {
    const {error, parsed} = dotenv.config();
    if (error) {
      exitWithError(error)
    }
    this._config$.next(parsed);
    console.info(parsed);
  }

  get config() {
    if (!this._config$.getValue()) {
      throw new Error('Config not loaded.');
    }
    return this._config$.getValue();
  }
}
