// users.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity'; // Make sure this import is correct

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }
}
