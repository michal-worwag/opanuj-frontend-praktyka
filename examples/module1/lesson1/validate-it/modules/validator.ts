import {
  INVALID_INPUT_MESSAGE,
  INVALID_INT_MESSAGE,
  VALID_INT_MESSAGE,
} from './messages';
import { type NumericValidationMethod, isValidInteger } from './methods';

function validate(input: string, validators: NumericValidationMethod[]) {
  if (!isValidInteger(input)) {
    return INVALID_INPUT_MESSAGE;
  }

  const isValidRangeInteger = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidRangeInteger) {
    return INVALID_INT_MESSAGE;
  }

  return VALID_INT_MESSAGE;
}

export { validate };
