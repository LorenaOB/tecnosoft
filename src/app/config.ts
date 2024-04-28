import { StringDictionary } from './interfaces/RolesPage';

export const Urls = {
  usersUrl: 'assets/database-test/users.json',
  eventsUrl: 'assets/database-test/events.json',
};
export const RolesPages: StringDictionary = {
  admin: 'admin-home',
  client: 'user-home',
};

export const LocalStorageNames = {
  usersList: 'users',
  userLoggedIn: 'userLoggedIn',
};