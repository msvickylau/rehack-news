Rails.application.routes.draw do
  scope '/api/v1' do
    get '/users/:id', to: 'users#index'
  end
end
