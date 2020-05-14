export class Vendor {
  id: number;
  code: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  phoneNumber: string;
  email: string;

  constructor(
    id: number = 0,
    code: string = '',
    name: string = '',
    address: string = '',
    city: string = '',
    state: string = '',
    zipCode: number = 0,
    phoneNumber: string = '',
    email: string = ''
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}