class AddUrlToPin < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :url, :text
  end
end
