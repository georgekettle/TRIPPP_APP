Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [] do
        resources :pins, module: :user, only: [ :index, :create, :show ]
        resources :trips, module: :user, only: [ :index, :create, :show ]
      end
      resources :trips, only: [] do
        resources :pins, module: :trip, only: [ :index ]
      end
      resources :pins, only: [ :show, :new, :create, :edit, :update ]
      resources :trips, only: [ :show, :new, :create, :edit, :update ]
      resources :photos, only: [ :create ]
      resources :users, only: [ :show ], param: :user_name
    end
  end

  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  # devise_for :users, controllers: {
  #       sessions: 'users/sessions'
  #     }

  root to: 'pages#home'
  # get "profile/:user_name", to: 'pages#home', as: 'profile'
  # get "profile/:user_name/:tab", to: 'pages#home'
  # get "trips/:id", to: 'pages#home'
  # get "pins/new", to: 'pages#home', as: 'new_pin'
  # get "pins/:pin_id", to: 'pages#home', as: 'pin'
  # get "login", to: 'pages#home'
  # get "signup", to: 'pages#home'

  match "*path", to: 'pages#home', via: :all
end
