Rails.application.routes.draw do
  scope '/api/v1' do
    get '/users/:id', to: 'users#show'
    get '/users/:id/saves', to: 'saves#index'
    post '/login', to: "sessions#create"  
  end
end
