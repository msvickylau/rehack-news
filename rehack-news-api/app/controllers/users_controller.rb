class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    render (
      { :json => @user, :except=> [:password_digest, :email] }
    )
  end
end
