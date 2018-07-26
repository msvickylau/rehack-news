class SavesController < ApplicationController
  def index
    @saves = Save.all

    render(
      json: @saves.all
    )
  end
end
