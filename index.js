let Keyboard = window.SimpleKeyboard.default;

let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "hg-theme-default hg-layout-default myTheme",
  layout: {
  'default': [
    '! A ^ W ξ Σ φ χ {bksp}',
    'θ α β ε ψ γ δ λ ω ρ',
    'ט ח ז ו ה ד ג נ א',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{shift} - { } [ ] ( ) +',
    '< > {space} {enter}'
  ],
  'shift': [
    '~ @ # % & * _ | {bksp}',
    'Θ : Β Ε Ψ Γ Δ Λ Ω Ρ',
    'א נ ג ד ה ו ז ח ט',
    'י כּ ל מ נ ס ע פּ =',
    'V I κ o צ ק ר ש ת',
    '{shift} - { } [ ] ( ) +',
    '< > {space} {enter}'
  ]
},
  buttonTheme: [
    {
      class: "emotions",
      buttons: "! A ^ W ξ Σ φ χ ט"
    },
    {
      class: "hebrew",
      buttons: "א נ ג ד ה ו ז ח ט י כּ ל מ נ ס ע פּ צ ק ר ש ת"
    },
    {
      class: "verbs",
      buttons: "ω א ג ד ו ז ח י ל מ נ ע פּ צ ק ש ת"
    },
    {
      class: "love",
      buttons: "ג ד ט י פּ ק"
    },
	{
      class: "signs",
      buttons: "- +"
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
  myKeyboard.setInput(event.target.value);
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
  let currentLayout = myKeyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  myKeyboard.setOptions({
    layoutName: shiftToggle
  });
}
