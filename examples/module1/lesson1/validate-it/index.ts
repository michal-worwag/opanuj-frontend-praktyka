import { validate } from './modules/validator';
import { NUMBER_VALIDATORS } from './modules/methods';

function checkNumber() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateBtn: HTMLButtonElement =
    document.querySelector('#validation-btn')!;
  const clearBtn: HTMLButtonElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLDivElement = document.querySelector('#result')!;

  validateBtn.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

checkNumber();
