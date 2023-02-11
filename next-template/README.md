# NextJS Template

Template with login functionality and chart implementatiom using [NextJS](https://nextjs.org/)

## Getting Started

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

```
npm install
```

To Start Development Server:

```
npm run dev
```

To Build:

```
npm run build
```

To Visit App:

`localhost:3000/`

## Features

- Using Bootstrap and React-Bootstrap <https://getbootstrap.com/> - <https://react-bootstrap.github.io/>
- Fetch data using axios <https://axios-http.com/es/docs/intro>
- Database connection and models implemented with Sequelize and mysql2 <https://sequelize.org/> - <https://github.com/sidorares/node-mysql2#readme>
- Authentication implemented with NextAuth <https://next-auth.js.org/>
- Charts implemented using ApexCharts <https://apexcharts.com/>
- Loading spinner implemented with React-Spinners <https://www.davidhu.io/react-spinners/>
- Random data implementation with Faker <https://www.npmjs.com/package/faker>
- Forms implemented using React Hook Form <https://react-hook-form.com/>
- Password Encrpted using BcryptJS <https://github.com/dcodeIO/bcrypt.js>

## Notes

- To use apexcharts it is necessary to disable the NextJS SSR functions by dynamically importing the package, please see the NextJS documentation for details <https://nextjs.org/docs/advanced-features/dynamic-import>.
