This is an Inventory Management take home assignment, bootstrapped with [`react-native cli`](https://reactnative.dev/docs/environment-setup).

## Problem Statement

The company Construction Machine Management Inc. manages a fleet of diverse building machines and rents them out to building companies. The director Mr. Chechnik manages those with multiple paper staple folders. He would like to manage the inventory on his computer and asks you to develop an application for that purpose.

## User Stories

1. As a staff member I want to have different machine types (bull dozers, cranes, chainsaws, ...).
2. As a staff member I would like to specify which attributes the machine type has once (weight, power, manufacturing date, ...).
3. As a staff member I want that attributes can be date, text, checkbox or number
4. As a staff member I want to be able to update the attributes.
5. As a staff member I want to be able to remove attributes that are no longer required
6. As a staff member I want that all machines of one type share attributes (all cranes have a model,
   weight, manufacture date as well as a maximum lift weight for example)
7. As a staff member I want to pick one of the attributes as a title attribute for the machines of one type (For eg. model).
8. As a staff member I want to set a title for a machine type (Chainsaw, Bulldozer, ...)
9. As a staff member I want to be able to add new machine types as well as to edit or delete existing ones at any time
10. As a staff member I want to have many machines of each machine type ( for example 6 chainsaws from different brands that have different characteristics)
11. As a staff member, I want to be able to filter by machine type (See all chain saws, all bull dozers, ...).
12. As a staff member, I want to see the filters in a drawer.
13. As a staff member I want to see all machines grouped by their type on one screen.
14. As a staff member I want to be able to add new machines as well as to edit or delete existing ones at any time.
15. As a staff member I want that everything is saved even after page reload.
16. As a staff member I want to use the app on my mobile phone or tablet.
17. As a staff member I want that to see a beautiful user interface.

## Getting Started

Clone the respository:

```bash
git clone https://github.com/KhubaibQaiser/inventory-management.git
```

Install the dependencies:

```bash
yarn
```

Run the metro server:

```bash
yarn start
```

Start the app:

```bash
yarn ios
# or
yarn android
```

Make changes in the code, save and see them reflected on your simulator/emulator/device.

## Tech Stack

- React Native CLI
- TypeScript
- React Navigation
- React Native Paper
- Redux
- Redux Persist
- Redux Toolkit

## TODOs

There are some user stories that still need to be implemented, like:

- Pick one attribute as the title.
- Render all machines group by their category on one screen.
- Make design responsive to support mobile phone and tablet.
- There is a lot fo room for user interface improvement.
