function groupBy(items, property) {
    return items.reduce((acc, item) => {
        const key = item[property];
        if (!acc[key]) {
        acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

let result1 = groupBy([
   { name: "Apple", type: "fruit" },
   { name: "Broccoli", type: "vegetable" },
   { name: "Banana", type: "fruit" }
], "type");

console.log(result1);
// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }