class AddPhotoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :photo, foreign_key: true
  end
end
