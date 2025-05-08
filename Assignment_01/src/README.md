<!--------------------------------- First Blog -------------------------------->
Question(2).What is the use of the keyof keyword in TypeScript? Provide an example.

##TypeScript Superpower: Understanding keyof 

If you’ve started using TypeScript, you’ve probably seen it catch bugs before they happen  which is awesome. But TypeScript can do way more than just type-check your variables. One of its coolest features is the keyof keyword.
Let’s break it down...

##What is keyof?
keyof takes an object type and returns a union of all its keys as string literal types.

Think of it like asking TypeScript:
“Hey, what are all the property names of this object?”

##Example:
type Product = {
  id: number;
  name: string;
  price: number;
};

// keyof Product === "id" | "name" | "price"
type ProductKeys = keyof Product;

Now ProductKeys is a type that can only be "id", "name", or "price" — nothing else!

✅ Real Use Case:
Let’s build a function that gets a property value from a product:

function getValue(obj: Product, key: keyof Product) {
  return obj[key];
}

const item = {
  id: 1,
  name: "Shoes",
  price: 79.99,
};

getValue(item, "name");   // ✅ Works
getValue(item, "color");  // ❌ Error: "color" isn’t a key of Product

💡 Why is this helpful?

    1.Prevents typos in property names

    2.Improves autocompletion in your editor

    3.Makes your code safer and smarter
So,
`keyof` is small but powerful — and it makes your type-driven coding more reliable. It's a very useful concept for beginners to learn.

<!--------------------------------- First Blog -------------------------------->


<!--------------------------------- Second Blog -------------------------------->
Question(7).Provide an example of using union and intersection types in TypeScript.

🎭 Union vs Intersection Types in TypeScript: 

When you're modeling data in TypeScript, sometimes you need a type to be one of many, and sometimes it needs to be all at once. That’s where union and intersection types come in.

Let’s break them down with simple, relatable examples.
⚖️ Union Types (|) — “Either This or That”

Union types allow a value to be one of multiple options.

type Dog = { kind: "dog"; barkVolume: number };
type Cat = { kind: "cat"; meowPitch: number };

type Pet = Dog | Cat;

function describePet(pet: Pet) {
  if (pet.kind === "dog") {
    console.log("Bark volume:", pet.barkVolume);
  } else {
    console.log("Meow pitch:", pet.meowPitch);
  }
}

Here, Pet can be either a Dog or a Cat. TypeScript automatically figures out what type it is when you check the kind.

🧩 Intersection Types (&) — “Both at the Same Time”

Intersection types combine multiple types into one — the object must have everything from all the types.

type Address = { city: string };
type UserInfo = { name: string };

type FullUser = Address & UserInfo;

const user: FullUser = {
  name: "Alice",
  city: "New York",
};

Now FullUser has both name and city — it’s like merging two puzzles into one full picture.

 Type         	Meaning	                    Use it when...
A | B	     Either A or B	       Something can be one of multiple shapes
A & B	      Both A and B  	    You want to combine multiple types

✨ Real-Life Examples:
    #Union: API response could be "success" or "error"

    #Intersection: A logged-in user who also has a shipping address

🚀 Final Thoughts:
Both keyof and union/intersection types help make your TypeScript code cleaner, safer, and easier to maintain. If you’re just starting out, focus on these features early — they’ll save you from a ton of bugs and confusion down the road.

TypeScript isn’t just about adding types — it’s about building confidence in your code.💪
<!--------------------------------- Second Blog -------------------------------->