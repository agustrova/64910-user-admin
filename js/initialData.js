const usersStart = [
  {
  fullname: 'John Doe',
  age: 30,
  email: 'admin@admin.com',
  id: '1',
  active: true,
  password: 'password123',
  password:'admin',
  bornDate: new Date('1993-01-01').getTime(),
  location: 'New York, NY',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325',
  role:'ADMIN_ROLE'
},
{
  fullname: 'Jane Doe',
  age: 25,
  role:'CLIENT_ROLE',
  email: 'jane.doe@example.com',
  id: '2',
  active: false,
  password: 'password456',
  bornDate: new Date('1998-05-05').getTime(),
  location: 'Los Angeles, CA',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'
},
{
  fullname: 'Alice Johnson',
  role:'CLIENT_ROLE',
  age: 35,
  email: 'alice.johnson@example.com',
  id: '3',
  active: true,
  password: 'password789',
  bornDate: new Date('1988-08-08').getTime(),//la fecha tiene que ser transformada a timestamp
  location: 'Miami, FL',
  image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png"
},
{
  fullname: 'Michael Smith',
  age: 40,
  role:'CLIENT_ROLE',
  email: 'michael.smith@example.com',
  id: '4',
  active: false,
  password: 'password101',
  bornDate: new Date('1983-04-10').getTime(),
  location: 'Chicago, IL',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
},
{
  fullname: 'Emily Johnson',
  age: 28,
  role:'CLIENT_ROLE',
  email: 'emily.johnson@example.com',
  id: '5',
  active: true,
  password: 'password202',
  bornDate: new Date('1995-02-15').getTime(),
  location: 'Houston, TX',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
},
{
  fullname: 'Daniel Lee',
  age: 34,
  email: 'daniel.lee@example.com',
  id: '6',
  active: false,
  password: 'password303',
  bornDate: new Date('1989-07-07').getTime(),
  location: 'San Francisco, CA',
  image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png"

},
{
  fullname: 'Samantha Davis',
  age: 22,
  role:'CLIENT_ROLE',
  email: 'samantha.davis@example.com',
  id: '7',
  active: true,
  password: 'password404',
  bornDate: new Date('2001-11-11').getTime(),
  location: 'Boston, MA',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'


},
{
  fullname: 'James Moore',
  age: 45,
  role:'CLIENT_ROLE',
  email: 'james.moore@example.com',
  id: '8',
  active: false,
  password: 'password505',
  bornDate: new Date('1978-12-19').getTime(),
  location: 'Dallas, TX',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

},
{
  fullname: 'Isabella Taylor',
  age: 29,
  role:'CLIENT_ROLE',
  email: 'isabella.taylor@example.com',
  id: '9',
  active: true,
  password: 'password606',
  bornDate: new Date('1994-06-24').getTime(),
  location: 'San Diego, CA',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

},
{
  fullname: 'Ethan Johnson',
  age: 31,
  role:'CLIENT_ROLE',
  email: 'ethan.johnson@example.com',
  id: '10',
  active: false,
  password: 'password707',
  bornDate: new Date('1992-03-03').getTime(),
  location: 'Denver, CO',
  image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

    }

];


if (localStorage.getItem("users") === null) {

  localStorage.setItem("users", JSON.stringify(usersStart))

}


const productStart = {
    //producto 1
    // producto2
}

if (localStorage.getItem("products") === null) {

    localStorage.setItem("product", JSON.stringify(productStart))
  
  }