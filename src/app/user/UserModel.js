export default class User {
  constructor({ id, first_name, last_name, avatar, favorite }) {
    this.id = id;
    this.avatar = avatar;
    this.name = `${first_name} ${last_name}`;
    this.favorite = favorite || false;
  }
}