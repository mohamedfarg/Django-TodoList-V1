const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//events
todoButton.addEventListener('click', addTodo)


//functions
function addTodo(e){
    $.ajax({
        type: "POST",
        url: "/your-endpoint/",
        data: { 
          title: "your title", 
          body: "your body text" 
        },
        success: function(response) {
          if (response.status === 'success') {
            console.log("Data sent successfully");
          }
        }
      });
      
}


// from django.contrib import messages
// from django.http import JsonResponse

// def your_view(request):
//     if request.method == 'POST':
//         title = request.POST.get('title')
//         body = request.POST.get('body')
//         # Do something with the data
//         messages.success(request, 'Data sent successfully')
//         response = {'status': 'success'}
//         return JsonResponse(response)