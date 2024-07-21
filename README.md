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

We'll be running from 9:00 - ??:??. 

- ??:??: **First session**
- ??:??: **Coffee Break**
- ??:??: **Second session**

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
git clone https://github.com/danduh/workshop-ts.git
cd workshop-ts
npm install
```

## Test it up

To make sure that everything works fine:
```bash
npm run ts

# In your output you will see something similar to:
1 [@log] Compilation time
1 [@log] Compilation time
2 [@log] Method primeMethodRecurcion was fired
3 [@log] Arguments passed to primeMethodRecurcion => 10000
4 [@log] starting execution of primeMethodRecurcion method
5 [@log] Results 1229
6 [@log] Method primeMethodRecurcion was completed
```


That's it! You'll now have all the dependencies you need to work through the workshop exercises.
