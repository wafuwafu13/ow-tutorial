import ow from "ow";

const unicorn = (arg) => {
  ow(arg, ow.string.minLength(5));
};

unicorn(3);
//=> ArgumentError: Expected `input` to be of type `string` but received type `number`

unicorn("yo");
//=> ArgumentError: Expected string `input` to have a minimum length of `5`, got `yo`

unicorn("yoyoyo");
