var arr = []
var input = document.querySelector('input')
var btn = document.querySelector('.generate')
var gen_text = document.querySelector('.gen-text')
var name = 'Md. Ishtiaque Arefin Khan'
var date = new Date()
var time = document.querySelector('.time')
var reload = document.querySelector('.reload')
var table_header = document.querySelectorAll('th')
var table = document.querySelector('table')
var Print = document.querySelector('.print')
var serial_notifier = document.querySelector('.serial_text')
var total_serial_number = document.querySelector('.serial_text_number')

alert('Welcome to the Random Serial Number Generating System developed by ' + name.toUpperCase() + '. \nTo use this system, type your desired number into the \'Input\' section. Then click on the \'Generate\' to get the result. You can also get it by pressing ENTER key. \n\nNote: Make sure that you\'ve at least a single digit in your \'Input\'. Otherwise, you\'ll get an error. Why so late, dear? Give it a try.')

function mainProgram() {
  for (var i = 1; i <= input.value; i++) {
    arr.push(i)
  }
  // console.log(arr)
  var arr2 = Array.from(arr)
  var sl = 0
  
  for (var j = 1; j <= arr.length; j++) {
    sl++
    var table_body = document.querySelector('tbody')
    var table_row = document.createElement('tr')
    table_body.appendChild(table_row)
    
    var table_data_one = document.createElement('td')
    table_row.appendChild(table_data_one)
    
    var table_data_two = document.createElement('td')
    table_row.appendChild(table_data_two)
    
    var ran_nmbr = Math.floor(Math.random() * arr2.length)
    
    var note1 = document.createTextNode(sl + '.')
    table_data_one.appendChild(note1)
    
    var note2 = document.createTextNode(arr2[ran_nmbr] + ' of Serial')
    
    table_data_two.appendChild(note2)
    arr2.splice(ran_nmbr, 1)
    
    table_data_one.style.borderColor = 'green'
    table_data_two.style.borderColor = 'green'
  }
  
  time.innerHTML = 'You generate the RANDOM SERIAL NUMBER GENERATING SYSTEM on ' + date.toLocaleString()
  gen_text.innerHTML = name.toUpperCase() + ' owns the entire system'
  total_serial_number.innerHTML = input.value
  serial_notifier.style.color = 'green'
  input.value = ''
  input.style.borderColor = 'green'
  reload.style.visibility = 'visible'
  Print.style.visibility = 'visible'
  
  table_header[0].style.color = 'green'
  table_header[0].style.borderColor = 'green'
  table_header[1].style.color = 'green'
  table_header[1].style.borderColor = 'green'
  table.style.borderColor = 'green'
  table.style.borderWidth = '2px'

  if (input.disabled == false) {
    input.disabled = true
  }

  btn.disabled = true
  btn.style.background = '#035003'
}

function errorMessage() {
  input.classList.add('error-input')
//   setTimeout(() => {
//     alert('Please insert your desired value')
//   }, 50);
    serial_notifier.innerHTML = 'Please insert your desired value'
    serial_notifier.classList.add('serial-notifier-add')
  
    btn.disabled = true
    btn.style.background = 'grey'
    reload.style.visibility = 'visible'
    input.disabled = true

    setTimeout(() => {
        if (serial_notifier.classList.contains('serial-notifier-add')) {
              serial_notifier.classList.remove('serial-notifier-add')
              serial_notifier.innerHTML = 'Total serial: '
              input.classList.remove('error-input')
        }
     }, 4000);
    
     
}

btn.addEventListener('click', () => {
  if (input.value == '') {
    errorMessage()
  }
  else if (input.value == 0) {
      alert('Please input value getter than zero (0)')
      input.value = ''
  }
  else {
    mainProgram()
  }
})

// Enter Key Pressed
window.addEventListener('keydown', key => {
  if (key.keyCode == '13') {
    if (input.value == '') {
      errorMessage()
    }
    else if (input.value == 0) {
      alert('Please input value getter than zero (0)')
      input.value = ''
    }
    else {
      mainProgram()
    }
  }
})

// Reload
reload.addEventListener('click', () => {
  window.location.reload()
})

// Print
Print.addEventListener('click', () => {
  window.print()
})
