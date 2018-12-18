class AddTitleToPin < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :title, :text
  end
end
