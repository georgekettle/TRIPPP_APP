Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [] do
        resources :pins, module: :user, only: [ :index, :create, :show ]
        resources :trips, module: :user, only: [ :index, :create, :show ]
      end
      resources :pins, only: [ :show, :new, :create, :edit, :update ]
      resources :trips, only: [ :show, :new, :create, :edit, :update ]
      resources :photos, only: [ :create ]
    end
  end
  get "pins/new", to: "pins#show", as: 'new_pin'
  get "pins/:pin_id", to: "pins#show", as: 'pin'
  get "profile/:user_name", to: "profile#show", as: 'profile'
  get "profile/:user_name/:tab", to: "profile#show"
  resources :trips, only: [ :show ]
  root to: 'profile#show'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
