let Keyboard = window.SimpleKeyboard.default;

let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "hg-theme-default hg-layout-default myTheme",
  layout: {
  'default': [
    '! A ^ W ξ Σ φ χ {bksp}',
    'θ α β ε ψ γ δ λ ω ρ',
    'א נ ג ד ה ו ז ח ט',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{shift} - { } [ ] ( ) +',
    '< > {space} {enter}'
  ],
  'shift': [
    '~ @ # % & * _ | {bksp}',
    'θ α β ε ψ γ δ λ ω ρ',
    'א נ ג ד ה ו ז ח ט {enter}',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{shift} - \{ \} [ ] ( ) +',
    '< > {space}' 
  ]
},
  buttonTheme: [
    {
      class: "my-theme",
      buttons: "Q W E R T Y q w e r t y"
    },
    {
      class: "hg-highlight",
      buttons: "Q q"
    }
  ],
  mergeDisplay: true,
  display: {
  '{bksp}': 'DEL',
  '{enter}': ' SEND ',
  '{shift}': 'SHIFT'
}
});

document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

function onChange(input) {
  document.querySelector(".input").value = input;
  //console.log("Input changed", input);
}

function onKeyPress(button) {
  //console.log("Button pressed", button);
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
