Rails.application.routes.draw do
  scope '/api' do
    get '/users/:id', to: 'users#index'
  end
end
