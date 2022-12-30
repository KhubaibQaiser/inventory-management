This is an Inventory Management take home assignment, bootstrapped with [`react-native cli`](https://reactnative.dev/docs/environment-setup).

## Problem Statement

The company Construction Machine Management Inc. manages a fleet of diverse building machines and rents them out to building companies. The director Mr. Chechnik manages those with multiple paper staple folders. He would like to manage the inventory on his computer and asks you to develop an application for that purpose.

## User Stories

1. Can have different machine types (bull dozers, cranes, chainsaws, ...).
2. Can specify which attributes the machine type has once (weight, power, manufacturing date, ...).
3. Can define attributes which can be date, text, checkbox or number.
4. Can be able to update the attributes.
5. Can be able to remove attributes that are no longer required
6. Can create all machines of one type share attributes (all cranes have a model, weight, manufacture date as well as a maximum lift weight for example)
7. Can pick one of the attributes as a title attribute for the machines of one type (For eg. model).
8. Can set a title for a machine type (Chainsaw, Bulldozer, ...)
9. Can be able to add new machine types as well as to edit or delete existing ones at any time
10. Can have many machines of each machine type ( for example 6 chainsaws from different brands that have different characteristics)
11. Can be able to filter by machine type (See all chain saws, all bull dozers, ...).
12. Can see the filters in a drawer.
13. Can see all machines grouped by their type on one screen.
14. Can be able to add new machines as well as to edit or delete existing ones at any time.
15. All changes are saved even after page reload.
16. Can use the app on my mobile phone or tablet.
17. Have a beautiful user interface.

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

#### User Stories

- Pick one attribute as the title.
- Render all machines group by their category on one screen.
- Make design responsive to support mobile phone and tablet.
- There is a lot fo room for user interface improvement.

#### Technical Debts

- Make routes typed. So that we can have strongly typed query params and navigation.
