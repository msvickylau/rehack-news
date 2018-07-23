class SavesController < ApplicationController
  def index
    @user = User.find_by_id(params[:id])
    @saves = Save.where("user_id = #{@user.id}")

    render(
      json: @saves.all
    )
  end
end
