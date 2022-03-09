const persons = [
    {
      "id": 1,
      "name": "enp1",
      "type": "LAN",
      "id_address": [
        "192.168.1.1",
        "192.168.1.2",
        "192.168.1.3"
      ]
    },
    {
      "id": 2,
      "name": "enp2",
      "type": "WAN",
      "id_address": [
        "192.168.2.1",
        "192.168.2.2",
        "192.168.2.3"
      ]
    },
    {
      "id": 3,
      "name": "enp3",
      "type": "LAN",
      "id_address": [
        "192.168.3.1",
        "192.168.3.2",
        "192.168.3.3"
      ]
    },
    {
      "id": 4,
      "name": "enp4",
      "type": "LAN",
      "id_address": [
        "192.168.5.1",
        "192.168.5.2",
        "192.168.5.3"
      ]
    }
  ]

// Find if the array contains an object by comparing the property value

// const newArray = persons.filter(persons => persons.type === 'LAN');
// console.log(newArray);
// const newArray = persons.filter(persons => persons.type === 'WAN');
// console.log(newArray);
const newArray = persons.map(persons => persons.name === 'enp1');
console.log(newArray);
