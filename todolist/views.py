from django.shortcuts import render, redirect,get_object_or_404
from .models import Todo

def todo_list(request):
    todos = Todo.objects.all()
    context = {'todos': todos}
    return render(request, 'index.html', context)

def todo_create(request):
    if request.method == 'POST':
        task = request.POST.get('title')
        if task:
            todo = Todo.objects.create(title=task)
        return redirect('todolist')
    return render(request, 'index.html')

def todo_update(request, pk):
    todo = get_object_or_404(Todo,id=pk)
    
    todo.completed = True
    todo.save()
    return redirect('todolist')
  
def todo_delete(request, pk):
    get_object_or_404(Todo,id=pk).delete()
    return redirect('todolist')