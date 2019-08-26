let Keyboard = window.SimpleKeyboard.default;

let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: {
  'default': [
    '! A ^ W ξ Σ φ χ {bksp}',
    'θ α β ε ψ γ δ λ ω ρ',
    'א נ ג ד ה ו ז ח ט {enter}',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{lock} - { } [ ] ( ) +',
    '< > {space}'
  ],
  'lock': [
    '~ @ # % & * _ | {bksp}',
    'θ α β ε ψ γ δ λ ω ρ',
    'א נ ג ד ה ו ז ח ט {enter}',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{lock} - { } [ ] ( ) +',
    '< > {space}' 
  ]
},
  mergeDisplay: true,
  display: {
  '{bksp}': 'DEL',
  '{enter}': ' SEND ',
  '{lock}': 'SHIFT'
}
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
