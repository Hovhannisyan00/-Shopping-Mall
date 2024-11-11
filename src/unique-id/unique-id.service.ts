import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UniqueIdService {
  generateUnique8CharString(): string {
    return crypto.randomBytes(4).toString('hex').slice(0, 8);
  }
}
