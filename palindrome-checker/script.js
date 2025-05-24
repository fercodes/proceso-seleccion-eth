const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') {
    alert('Please input a value.');
    return;
  }

  const message = isPalindrome(value)
    ? `${value} is a palindrome`
    : `${value} is not a palindrome`;

  result.textContent = message;
});
