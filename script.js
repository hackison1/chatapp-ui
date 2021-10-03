window.onload = () => {
   scrollToBottom()
}

function scrollToBottom() {
    const messageBody = document.querySelector(".message-body")
    messageBody.scrollTop = messageBody.scrollHeight
}


// send message
const sendBtn = document.querySelector("#send-btn")
sendBtn.addEventListener('click', (e) => {
    // prevent page from refreshing
    e.preventDefault()

    const message = document.querySelector("#message-input")

    const messageBody = document.querySelector(".message-body")

    if (message.value == "" || message.value == null) return 

    const div = document.createElement('div')
    div.setAttribute('class', 'messages')
    div.textContent = message.value
    messageBody.append(div)
    scrollToBottom()
    message.value = ""
})

