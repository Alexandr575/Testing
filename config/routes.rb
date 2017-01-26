Rails.application.routes.draw do
  root 'tasks#index'

  resources :tasks

  put '/task/:id', to: 'tasks#update'

 end
