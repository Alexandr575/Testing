class TasksController < ApplicationController
	def index
  		@task = Task.new
	end

	def update
		puts params
		t = Todo.find(params[:id])
		t.isCompleted = !t.isCompleted
		t.save
			redirect_to root_path
		end

	def create
       @task = Todo.create(text: params[:tf], task_id: params[:sl])
           redirect_to root_path
	end



end
