class AddSecretToTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :secret, :boolean, default: false
  end
end
