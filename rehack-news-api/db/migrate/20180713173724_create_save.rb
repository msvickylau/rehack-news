class CreateSave < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.timestamps

      t.string :objectID
      t.string :title
      t.string :url
    end
  end
end
