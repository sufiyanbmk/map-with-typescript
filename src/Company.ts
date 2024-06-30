import data from './data.js';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = data.company.companyName();
    this.catchPhrase = data.company.catchPhrase();
    this.location = {
      lat: parseFloat(data.address.latitude()),
      lng: parseFloat(data.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
