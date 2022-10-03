import { faker } from "@faker-js/faker";

export interface BodyData {
  name: string;
  occupation: string;
  hair_color: string;
  gender: string;
  phone: string;
}

const { firstName, gender, jobTitle } = faker.name;
const color = faker.color.human;
const phone = faker.phone.number;
const arr = [...Array(10)];

export default function create(): BodyData[] {
  return arr.map(() => ({
    name: firstName(),
    occupation: jobTitle(),
    hair_color: color(),
    gender: gender(),
    phone: phone(),
  }));
}

function body() {
  return;
}
