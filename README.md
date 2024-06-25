# Typescript Meta-Programming from 0 to 100

Hello! My name's [Daniel Ostrovsky](https://x.com/danduh81). This is a workshop repo to teach you about Advanced TypeScript.

## Section 1: Fundamentals of TypeScript Metaprogramming (2 hours)

**1. Introduction to TypeScript Metaprogramming**

**2. Object Descriptor**
- Understanding object descriptors in TypeScript
- Practical examples and use cases

**3. Decorators**
- Class Decorators
- Method Decorators
- Property Decorators

**4. Class Mixing**

**5. Q&A and Discussion**

## Section 2: Building a Mini Framework for Backend API (2 hours)

**1. Introduction to the Mini Framework**

**2. Setting Up the Project**

**3. Implementing Core Features**

**4. Building the API**

**5. Q&A and Hands-on Coding**

## Preparation and Resources

**Prerequisites for Participants:**
- Basic understanding of TypeScript

## Workshop Plan

We'll be running from 13:15 - 17:30. July 4th Here's the plan:

- 13:15-15:15: **First session**
- 15:15-15:30: **Coffee Break**
- 15:30-17:30: **Second session**

## System Requirements

- git v2.14.1 or greater
- NodeJS v18.x or greater
- npm v8.5.0 or greater

All of these must be available in your `PATH`. To verify things are set up properly, you can run this:

```bash
git --version
node --version
npm --version
```

## Setup

After you've made sure to have the correct things (and versions) installed, you should be able to just run a few commands to get set up:

```bash
git clone https://github.com/mattpocock/advanced-typescript-workshop.git
cd advanced-typescript-workshop
npm install
```

That's it! You'll now have all the dependencies you need to work through the workshop exercises.

## Exercises

Exercises are in the [`./exercises`](./exercises) folder. They're designed to be worked through one after the other.

Each exercise follows a similar pattern:

- Look at the file with the `*.code.ts` extension. This gives you the code we're going to be working through and trying to understand.
- Read through the `*.exercise.ts` file. Read through the file, comment-by-comment, and follow the instructions by either editing the file inline, or editing the `*.code.ts` file.
- Wherever you see reference to `Solution #1`, check the `*.solutions.ts` file when you want to see the solution. **Make sure you check the solution before proceeding!** There's often crucial information there.

Be careful to read through each part of the exercise carefully - if you skip over parts of them, it might get difficult to find your way back.

Also, consider **splitting your IDE into two panels**, both looking at the same file. You can read from one, and write in the other - meaning you don't have to scroll up and down too much.

### Emoji

Exercises use emoji to express various different things:

- 💡 - A new idea appears!
- 🛠 - Write some code!
- 🧑‍💻 - Your team lead has some thoughts...
- 🕵️‍♂️ - Time for an investigation...
- ⛔️ - Eek! A type error.
- ✅ - Hooray! The type error was fixed.
- 🚁 - Hover over something.
- 🔮 - Do a go-to-definition.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).