class AddLatitudeToDestinations < ActiveRecord::Migration[5.2]
  def change
    add_column :destinations, :latitude, :float
  end
end
