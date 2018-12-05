Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [] do
        resources :pins, only: [ :index, :create, :show ]
        resources :trips, only: [ :index, :create, :show ]
      end
    end
  end
  get "profile/:user_name/:tab", to: "trips#show"
  resources :trips, only: [ :show ]
  root to: 'trips#show'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
