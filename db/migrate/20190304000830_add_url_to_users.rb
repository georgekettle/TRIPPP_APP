class AddUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_url, :text
  end
end
