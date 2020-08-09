const rec = new webkitSpeechRecognition()
rec.lang = 'en-US';
rec.onend = function () {
   console.log("Connection is ended!")
}
rec.onresult = function (event) {
   const command = event.results[0][0].transcript
   console.log(command)

   // DECLARING AND ADDING LI
   const tasks = document.createElement('LI')
   task_box.appendChild(tasks)


   // DECLARING AND ADDING P
   const task_text = document.createElement('P')
   task_text.textContent = command
   tasks.appendChild(task_text)
   task_name.value = ''

   // DECLARING AND ADDING BUTTON
   const removeBut = document.createElement('button')
   tasks.appendChild(removeBut)

   // ADDING REMOVE FUNCTION TO BUTTON
   removeBut.onclick = function () {
      tasks.remove()
   }

   if (command === "delete all") {
      task_box.remove()
   }
}
rec.onerror = function () {
   console.log("Error ocured")
}
window.onkeyup = function (e) {
   if (e.keyCode === 32) {
      rec.start()

   }
}


task_name.onkeyup = function (event) {

   if (event.keyCode === 13 && task_name.value.length > 0) {

      // DECLARING AND ADDING LI
      const tasks = document.createElement('LI')
      task_box.appendChild(tasks)

      // DECLARING AND ADDING P
      const task_text = document.createElement('P')
      task_text.textContent = task_name.value
      tasks.appendChild(task_text)
      task_name.value = ''

      // DECLARING AND ADDING BUTTON
      const removeBut = document.createElement('BUTTON')
      tasks.appendChild(removeBut)

      // ADDING REMOVE FUNCTION TO BUTTON
      removeBut.onclick = function () {
         tasks.remove()
      }

   }

}
