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
    end
  end
  resources :trips, only: [ :show ]

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'
  get "profile/:user_name", to: 'pages#home', as: 'profile'
  get "profile/:user_name/:tab", to: 'pages#home'
  get "pins/new", to: 'pages#home', as: 'new_pin'
  get "pins/:pin_id", to: 'pages#home', as: 'pin'
end
