Rails.application.routes.draw do
  scope '/api/v1' do
    get '/saves', to: 'saves#index'
  end
end
