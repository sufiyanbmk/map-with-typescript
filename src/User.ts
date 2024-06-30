import data from './data.js';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = data.name.firstName();
    this.location = {
      lat: parseFloat(data.address.latitude()),
      lng: parseFloat(data.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
