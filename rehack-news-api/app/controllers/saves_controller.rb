class SavesController < ApplicationController
  def index
    @saves = Save.all

    render json: @saves, status: :ok
  end

  def create
    @save = Save.new(save_params)
    @save.save
    render json: @save, status: :created
  end

  def destroy
    @save = Save.where(id: params[:id]).first
    @save.destroy
  end

  def save_params
    params.permit(
      :id,
      :objectID,
      :title,
      :url
    )
  end
end
