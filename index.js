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
    ' V I κ o צ ק ר ש ת',
    '{shift} - { } [ ] ( ) +',
    '< > {space}'
  ],
  'shift': [
    '~ @ # % & * _ | {bksp}'    
  ]
},
  mergeDisplay: true,
  display: {
  '{bksp}': 'efface',
  '{enter}': ' < ',
  '{shift}': 'shift'
}
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
