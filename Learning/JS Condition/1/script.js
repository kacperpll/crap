var age = Number(prompt("How old are you?"));

if (age<0)
{
  console.log("Error, your age can't be less than 0.");
}
// else if (age%2 !== 0 && age ==21)
// {
//   console.log("Happy 21st birthday!! Btw your age is odd!");
// }
// else if (age == 21)
// {
//   console.log("Happy 21st birthday!!");
// }
//
// else if (age == 1 || age == 4 || age == 9 || age == 16|| age == 25 || age == 36 ||
//       age == 49 || age == 64 || age == 81 || age == 100 || age == 121 || age == 124)
// {
//   console.log("Perfect square!");
// }
//
// else (true)
// {
//   var age = age%2;
//   if (age !== 0)
//   {
//     console.log("Your age is odd!");
//   }
// }
if (age === 21)
{
  console.log("Happy 21st birthday!!");
}
if (age%2 !== 0)
{
  console.log("Your age is odd!");
}
if (age% Math.sqrt(age) === 0)
{
  console.log("Your age is perfect square!");
}
