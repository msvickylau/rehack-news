class SessionsController < ApplicationController

  skip_before_action :authenticate

  # we use the data in the auth_params to authorize our user via bcrypt
  # if the user is authenticated, generate JWT, using the Auth library
  # we are encrypting the user's ID and sending the JWT back to the client-side app, as JSON, where it will be stored in localStorage
  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
    end
  end

  private
    def auth_params
      params.require(:auth).permit(:email, :password)
    end
