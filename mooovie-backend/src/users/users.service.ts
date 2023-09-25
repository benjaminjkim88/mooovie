/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import * as admin from 'firebase-admin';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  //adding new user
  async addUser(user: User): Promise<User> {
    try {

      //salting for passwords
      const saltRounds = 10;
      const hashedPass = await bcrypt.hash(user.password, saltRounds);

      const userInfo = await admin.auth().createUser({
        email: user.email,
        password: hashedPass,
      });

      //setting user data in FireStore
      await admin.firestore().collection('users').doc(userInfo.uid).set({
        username: user.username,
        email: user.email,
      });

      return {
        id: userInfo.uid,
        uid: userInfo.uid, 
        email: user.email,
        username: user.username,
        password: user.password,
      };
    } catch (error) {
      throw new Error(`User registration failed: ${error.message}`);
    }
  }

  //checks for users login with whats saved in firebase
  async validateUser (email: string, password: string): Promise<User | null> {
    try {
      const userDoc = await admin.firestore().collection('users').where('email', '==', email).get();

      if (userDoc.empty) {
        return null;
      }

      const userData = userDoc.docs[0].data();

      const isPassValid = await bcrypt.compare(password, userData.password);

      if (isPassValid) {
          return {
          id: userDoc.docs[0].id,
          uid: userDoc.docs[0].id,
          email: userData.email,
          username: userData.username,
          password: '*****', // Do not return the actual password
        };
      } else {
        return null;
      }
    }
      catch (error) {
        throw new Error('User validation failed: ${error.message');
      }

    }

    //retrieves users data
  async getUsers(): Promise<User[]> {
    try {
      const querySnapshot = await admin.firestore().collection('users').get();
      const users: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const user: User = {
          id: doc.id,
          uid: doc.id, 
          email: userData.email,
          username: userData.username,
          password: '*****',
        };
        users.push(user);
      });
      return users;
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }
  }
}
