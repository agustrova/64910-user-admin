const usersArray = [
    {
    fullname: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    id: '1',
    active: true,
    password: 'password123',
    bornDate: new Date('1993-01-01').getTime(),
    location: 'New York, NY'
    },
    {
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Los Angeles, CA'
    },
    {
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Miami, FL'
    },
    {
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'Chicago, IL'
    },
    {
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'Houston, TX'
    },
    {
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'San Francisco, CA'
    },
    {
    fullname: 'Samantha Davis',
    age: 22,
    email: 'samantha.davis@example.com',
    id: '7',
    active: true,
    password: 'password404',
    bornDate: new Date('2001-11-11').getTime(),
    location: 'Boston, MA'
    },
    {
    fullname: 'James Moore',
    age: 45,
    email: 'james.moore@example.com',
    id: '8',
    active: false,
    password: 'password505',
    bornDate: new Date('1978-12-19').getTime(),
    location: 'Dallas, TX'
    },
    {
    fullname: 'Isabella Taylor',
    age: 29,
    email: 'isabella.taylor@example.com',
    id: '9',
    active: true,
    password: 'password606',
    bornDate: new Date('1994-06-24').getTime(),
    location: 'San Diego, CA'
    },
    {
    fullname: 'Ethan Johnson',
    age: 31,
    email: 'ethan.johnson@example.com',
    id: '10',
    active: false,
    password: 'password707',
    bornDate: new Date('1992-03-03').getTime(),
    location: 'Denver, CO'
    }
];

// obtener el body de la tabla
const tableBody = document.getElementById("table-body")
// iterar el array y agarrar un tr por cada alumno que tengamos

usersArray.forEach(user => {

    tableBody.innerHTML +=`
    <tr class="table-body">
    <td class="user/image">
        <img src="https://pbs.twimg.com/profile_images/1677317277425758209/p9QbUJTM_400x400.jpg" alt="Imagen de prueba">
    </td>
    <td class="user-name">${user.fullname}</td>
    <td class="user-email">${user.email}</td>
    <td class="user-location">${user.location}</td>
    <td class="user-age">${user.age}</td>
    <td class="user-date">${user.bornDate}</td>
</tr>`

})
